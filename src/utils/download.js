import JSZip from 'jszip';
import { saveAs } from 'file-saver';

function sanitize(str) {
  return str.replace(/[/\\?%*:|"<>]/g, '-').trim();
}

function folderPath(paper, type) {
  // Structure: PaperType/Year/filename
  const paperFolder = sanitize(paper.paper);
  const yearFolder = String(paper.year);
  const boardShort = sanitize(paper.board);
  const filename = `${boardShort}_${paper.year}_${sanitize(paper.session)}_${sanitize(paper.paper)}_${type}.pdf`;
  return `${paperFolder}/${yearFolder}/${filename}`;
}

async function fetchPdf(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return res.arrayBuffer();
}

export async function downloadPapersAsZip(papers, options = {}, onProgress) {
  const { includeQP = true, includeMS = true, zipName = 'A-Level-Papers' } = options;
  const zip = new JSZip();
  let done = 0;
  const total = papers.reduce((n, p) => n + (includeQP && p.qp ? 1 : 0) + (includeMS && p.ms ? 1 : 0), 0);

  const tasks = [];
  for (const paper of papers) {
    if (includeQP && paper.qp) {
      tasks.push(
        fetchPdf(paper.qp).then(buf => {
          zip.file(folderPath(paper, 'QP'), buf);
          done++;
          onProgress?.(Math.round((done / total) * 100));
        }).catch(() => {
          done++;
          onProgress?.(Math.round((done / total) * 100));
        })
      );
    }
    if (includeMS && paper.ms) {
      tasks.push(
        fetchPdf(paper.ms).then(buf => {
          zip.file(folderPath(paper, 'MS'), buf);
          done++;
          onProgress?.(Math.round((done / total) * 100));
        }).catch(() => {
          done++;
          onProgress?.(Math.round((done / total) * 100));
        })
      );
    }
  }

  await Promise.all(tasks);
  const blob = await zip.generateAsync({ type: 'blob' });
  saveAs(blob, `${zipName}.zip`);
}
