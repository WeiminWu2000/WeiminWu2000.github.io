document.getElementById('copy-bibtex').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(document.getElementById('bibtex').textContent);
    status.textContent = 'BibTeX copied.';
  } catch {
    status.textContent = 'Please select and copy the citation below.';
  }
});
