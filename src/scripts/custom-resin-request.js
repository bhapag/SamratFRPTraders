// Custom Resin Specification Request — client-side only.
// No backend exists for this form: the WhatsApp/email buttons open a
// pre-filled wa.me/mailto link the customer must send themselves, and the
// Print button opens the browser's own print dialog. Nothing here ever
// transmits data anywhere on its own.
//
// Every field that should appear in the WhatsApp/email/print summary reads
// its label straight from the Astro-rendered `data-summary-label` attribute
// on the field itself — so the summary text can never drift out of sync
// with what the customer sees on screen in either language.

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function generateReference() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const rand = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
  return `CRSR-${y}${m}${d}-${rand}`;
}

function collectGroup(form, group) {
  const items = [];
  form.querySelectorAll(`[data-summary-group="${group}"]`).forEach((el) => {
    let value = '';
    if (el.type === 'checkbox') {
      if (!el.checked) return;
      value = el.dataset.summaryValue || 'Yes';
    } else if (el.tagName === 'SELECT') {
      value = el.value ? el.options[el.selectedIndex].text.trim() : '';
    } else {
      value = (el.value || '').trim();
    }
    if (!value) return;
    items.push({ label: el.dataset.summaryLabel || '', value });
  });
  return items;
}

function collectCustomRequirements(container) {
  if (!container) return [];
  return [...container.querySelectorAll('[data-requirement-row]')]
    .map((row) => {
      const label = row.querySelector('[data-role="req-label"]')?.value.trim();
      const value = row.querySelector('[data-role="req-value"]')?.value.trim();
      if (!label || !value) return null;
      return { label, value };
    })
    .filter(Boolean);
}

function buildGroups(form) {
  return {
    yourDetails: collectGroup(form, 'yourDetails'),
    whatYouNeed: collectGroup(form, 'whatYouNeed'),
    preferred: collectGroup(form, 'preferred'),
    custom: collectCustomRequirements(form.querySelector('#customRequirements')),
    notes: collectGroup(form, 'notes'),
  };
}

function flattenGroups(groups) {
  return [...groups.yourDetails, ...groups.whatYouNeed, ...groups.preferred, ...groups.custom, ...groups.notes].map(
    (item) => `${item.label}: ${item.value}`,
  );
}

function referenceLine(form) {
  const refInput = form.querySelector('#requestReference');
  if (!refInput) return null;
  return `${refInput.dataset.summaryLabel || 'Request Reference'}: ${refInput.value || ''}`;
}

function validate(form) {
  const errors = [];
  const name = form.querySelector('#name');
  const product = form.querySelector('#product');
  const phone = form.querySelector('#phone');
  const email = form.querySelector('#email');

  if (!name.value.trim()) {
    errors.push({ id: 'name', field: name, message: form.dataset.errorName });
  }
  if (!product.value) {
    errors.push({ id: 'product', field: product, message: form.dataset.errorProduct });
  }
  if (!phone.value.trim() && !email.value.trim()) {
    errors.push({ id: 'contact', field: phone, extraField: email, message: form.dataset.errorContact });
  }
  return errors;
}

function clearErrors(form) {
  const errorsBox = form.querySelector('#formErrors');
  if (errorsBox) {
    errorsBox.hidden = true;
    errorsBox.innerHTML = '';
  }
  ['name', 'product', 'phone', 'email'].forEach((id) => {
    form.querySelector('#' + id)?.removeAttribute('aria-invalid');
  });
  form.querySelectorAll('.field-error').forEach((el) => {
    el.hidden = true;
    el.textContent = '';
  });
}

function showErrors(form, errors) {
  clearErrors(form);

  const errorsBox = form.querySelector('#formErrors');
  if (errorsBox) {
    const heading = document.createElement('p');
    heading.className = 'form-errors-heading';
    heading.textContent = form.dataset.errorSummaryHeading || '';
    const list = document.createElement('ul');
    errors.forEach((error) => {
      const li = document.createElement('li');
      li.textContent = error.message || '';
      list.appendChild(li);
    });
    errorsBox.append(heading, list);
    errorsBox.hidden = false;
  }

  errors.forEach((error) => {
    error.field?.setAttribute('aria-invalid', 'true');
    error.extraField?.setAttribute('aria-invalid', 'true');
    const inline = form.querySelector('#' + error.id + '-error');
    if (inline) {
      inline.textContent = error.message || '';
      inline.hidden = false;
    }
  });

  errors[0]?.field?.focus();
}

function renderPrintGroup(title, items) {
  if (!items.length) return '';
  const rows = items
    .map((item) => `<div class="print-row"><dt>${escapeHtml(item.label)}</dt><dd>${escapeHtml(item.value)}</dd></div>`)
    .join('');
  return `<section class="print-group"><h3>${escapeHtml(title)}</h3><dl>${rows}</dl></section>`;
}

function populatePrintSummary(form) {
  const target = document.getElementById('printSummary');
  if (!target) return;

  const groups = buildGroups(form);
  const refInput = form.querySelector('#requestReference');
  const disclaimer = form.querySelector('.crsr-disclaimer')?.textContent.trim() || '';
  const generatedOn = new Date().toLocaleString();

  target.innerHTML = [
    `<div class="print-head"><p class="print-brand">Samrat FRP Traders</p><h2>${escapeHtml(
      form.dataset.printTitle || '',
    )}</h2><p class="print-meta">${escapeHtml(refInput?.dataset.summaryLabel || '')}: ${escapeHtml(
      refInput?.value || '',
    )} &middot; ${escapeHtml(form.dataset.printGeneratedOn || '')} ${escapeHtml(generatedOn)}</p></div>`,
    renderPrintGroup(form.dataset.groupYourDetails || '', groups.yourDetails),
    renderPrintGroup(form.dataset.groupWhatYouNeed || '', groups.whatYouNeed),
    renderPrintGroup(form.dataset.groupPreferred || '', [...groups.preferred, ...groups.custom]),
    renderPrintGroup(form.dataset.groupNotes || '', groups.notes),
    `<p class="print-disclaimer">${escapeHtml(disclaimer)}</p>`,
  ].join('');
}

export function wireCustomResinRequestForm() {
  const form = document.getElementById('crsrForm');
  if (!form || form.dataset.wired === 'true') return;
  form.dataset.wired = 'true';

  const refInput = form.querySelector('#requestReference');
  if (refInput && !refInput.value) refInput.value = generateReference();

  const addBtn = form.querySelector('#addRequirementBtn');
  const reqContainer = form.querySelector('#customRequirements');
  const template = form.querySelector('#requirementRowTemplate');

  addBtn?.addEventListener('click', () => {
    if (!template || !reqContainer) return;
    const row = template.content.firstElementChild.cloneNode(true);
    reqContainer.appendChild(row);
    row.querySelector('[data-role="req-label"]')?.focus();
  });

  reqContainer?.addEventListener('click', (event) => {
    const removeBtn = event.target.closest('[data-role="req-remove"]');
    if (removeBtn) removeBtn.closest('[data-requirement-row]')?.remove();
  });

  form.addEventListener('input', (event) => {
    if (event.target.matches('#name, #product, #phone, #email')) clearErrors(form);
  });

  form.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const errors = validate(form);
      if (errors.length) {
        showErrors(form, errors);
        return;
      }
      clearErrors(form);

      const action = button.dataset.action;

      if (action === 'whatsapp') {
        const lines = [referenceLine(form), ...flattenGroups(buildGroups(form))].filter(Boolean);
        const text = [form.dataset.waIntro || '', '', ...lines].join('\n');
        window.open('https://wa.me/' + form.dataset.waNumber + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
        return;
      }

      if (action === 'email') {
        const lines = [referenceLine(form), ...flattenGroups(buildGroups(form))].filter(Boolean);
        const productSelect = form.querySelector('#product');
        const productLabel = productSelect.value ? productSelect.options[productSelect.selectedIndex].text.trim() : '';
        const subject = `${form.dataset.emailSubjectPrefix || ''} — ${productLabel} — ${refInput?.value || ''}`;
        const body = lines.join('\n');
        window.location.href =
          'mailto:' + form.dataset.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        return;
      }

      if (action === 'print') {
        populatePrintSummary(form);
        window.print();
      }
    });
  });

  window.addEventListener('beforeprint', () => populatePrintSummary(form));
}
