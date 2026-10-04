// ===== Data =====
const JALUR_SMA = [
  { id: "rapor", label: "Akademik Rapor" },
  { id: "kejuaraan", label: "Akademik Kejuaraan" },
  { id: "non-akademik-kejuaraan", label: "Non-Akademik Kejuaraan" },
  { id: "non-akademik-kepemimpinan", label: "Non-Akademik Kepemimpinan" },
];

const JALUR_SMK = [
  { id: "rapor", label: "Akademik Rapor" },
  { id: "kelas-industri", label: "Rapor Kelas Industri" },
  { id: "kejuaraan", label: "Akademik Kejuaraan" },
  { id: "non-akademik-kejuaraan", label: "Non-Akademik Kejuaraan" },
  { id: "non-akademik-kepemimpinan", label: "Non-Akademik Kepemimpinan" },
];

const MATA_PELAJARAN = [
  { key: "bi", label: "Bahasa Indonesia", weight: 2 },
  { key: "mat", label: "Matematika", weight: 3 },
  { key: "ipa", label: "IPA", weight: 3 },
  { key: "ips", label: "IPS", weight: 1 },
  { key: "bing", label: "Bahasa Inggris", weight: 2 },
];

const TABEL_KEMDIKBUD = [
  { rank: "Juara 1", wilayah: "Internasional", tunggal: 455, beregu: 445 },
  { rank: "Juara 2", wilayah: "Internasional", tunggal: 440, beregu: 430 },
  { rank: "Juara 3", wilayah: "Internasional", tunggal: 425, beregu: 415 },
  { rank: "Juara 1", wilayah: "Asia", tunggal: 410, beregu: 400 },
  { rank: "Juara 2", wilayah: "Asia", tunggal: 395, beregu: 385 },
  { rank: "Juara 3", wilayah: "Asia", tunggal: 380, beregu: 370 },
  { rank: "Juara 1", wilayah: "Nasional", tunggal: 365, beregu: 355 },
  { rank: "Juara 2", wilayah: "Nasional", tunggal: 350, beregu: 340 },
  { rank: "Juara 3", wilayah: "Nasional", tunggal: 335, beregu: 325 },
  { rank: "Juara Harapan", wilayah: "Nasional", tunggal: 320, beregu: 310 },
  { rank: "Juara 1", wilayah: "Provinsi", tunggal: 305, beregu: 295 },
  { rank: "Juara 2", wilayah: "Provinsi", tunggal: 290, beregu: 280 },
  { rank: "Juara 3", wilayah: "Provinsi", tunggal: 275, beregu: 265 },
  { rank: "Juara Harapan", wilayah: "Provinsi", tunggal: 260, beregu: 250 },
  { rank: "Juara 1", wilayah: "Kabupaten/Kota", tunggal: 245, beregu: 235 },
  { rank: "Juara 2", wilayah: "Kabupaten/Kota", tunggal: 230, beregu: 220 },
  { rank: "Juara 3", wilayah: "Kabupaten/Kota", tunggal: 215, beregu: 205 },
  { rank: "Juara Harapan", wilayah: "Kabupaten/Kota", tunggal: 200, beregu: 190 },
];

const TABEL_LUAR_KEMEN = [
  { rank: "Juara 1", wilayah: "Internasional", tunggal: 400, beregu: 390 },
  { rank: "Juara 2", wilayah: "Internasional", tunggal: 385, beregu: 375 },
  { rank: "Juara 3", wilayah: "Internasional", tunggal: 370, beregu: 360 },
  { rank: "Juara 1", wilayah: "Asia", tunggal: 355, beregu: 345 },
  { rank: "Juara 2", wilayah: "Asia", tunggal: 340, beregu: 330 },
  { rank: "Juara 3", wilayah: "Asia", tunggal: 325, beregu: 315 },
  { rank: "Juara 1", wilayah: "Nasional", tunggal: 310, beregu: 300 },
  { rank: "Juara 2", wilayah: "Nasional", tunggal: 295, beregu: 285 },
  { rank: "Juara 3", wilayah: "Nasional", tunggal: 280, beregu: 270 },
  { rank: "Juara Harapan", wilayah: "Nasional", tunggal: 265, beregu: 255 },
  { rank: "Juara 1", wilayah: "Provinsi", tunggal: 250, beregu: 240 },
  { rank: "Juara 2", wilayah: "Provinsi", tunggal: 235, beregu: 225 },
  { rank: "Juara 3", wilayah: "Provinsi", tunggal: 220, beregu: 210 },
  { rank: "Juara Harapan", wilayah: "Provinsi", tunggal: 205, beregu: 195 },
  { rank: "Juara 1", wilayah: "Kabupaten/Kota", tunggal: 190, beregu: 180 },
  { rank: "Juara 2", wilayah: "Kabupaten/Kota", tunggal: 175, beregu: 165 },
  { rank: "Juara 3", wilayah: "Kabupaten/Kota", tunggal: 160, beregu: 150 },
  { rank: "Juara Harapan", wilayah: "Kabupaten/Kota", tunggal: 145, beregu: 135 },
];

const TABEL_PRAMUKA = [
  { prestasi: "Piagam Jambore Dunia", perorangan: "Juara 1 Internasional", beregu: "—" },
  { prestasi: "Piagam Pramuka Teladan", perorangan: "Juara 1 Internasional", beregu: "—" },
  { prestasi: "Piagam Jambore Regional", perorangan: "Juara 2 Internasional", beregu: "—" },
  { prestasi: "Piagam Pramuka Garuda", perorangan: "Juara 1 Nasional", beregu: "—" },
  { prestasi: "Piagam Jambore Nasional", perorangan: "Juara 2 Nasional", beregu: "—" },
  { prestasi: "Juara 1 Lomba Tingkat V Nasional", perorangan: "—", beregu: "Juara 1 Nasional" },
  { prestasi: "Juara 2 Lomba Tingkat V Nasional", perorangan: "—", beregu: "Juara 2 Nasional" },
  { prestasi: "Juara 3 Lomba Tingkat V Nasional", perorangan: "—", beregu: "Juara 3 Nasional" },
  { prestasi: "Piagam Jambore Daerah Provinsi", perorangan: "Juara 2 Provinsi", beregu: "—" },
  { prestasi: "Juara 1 Lomba Tingkat IV Provinsi", perorangan: "—", beregu: "Juara 1 Provinsi" },
  { prestasi: "Juara 2 Lomba Tingkat IV Provinsi", perorangan: "—", beregu: "Juara 2 Provinsi" },
  { prestasi: "Juara 3 Lomba Tingkat IV Provinsi", perorangan: "—", beregu: "Juara 3 Provinsi" },
  { prestasi: "Piagam Jambore Tingkat Kabupaten/Kota", perorangan: "Juara 2 Kab/Kota", beregu: "—" },
  { prestasi: "Juara 1 Lomba Tk. III Kab/Kota atau Keterampilan Pramuka", perorangan: "—", beregu: "Juara 1 Kab/Kota" },
  { prestasi: "Juara 2 Lomba Tk. III Kab/Kota atau Keterampilan Pramuka", perorangan: "—", beregu: "Juara 2 Kab/Kota" },
  { prestasi: "Juara 3 Lomba Tk. III Kab/Kota atau Keterampilan Pramuka", perorangan: "—", beregu: "Juara 3 Kab/Kota" },
];

const TABEL_OSIS = [
  { label: "Ketua OSIS", penyetaraan: "Juara 1 tk. Provinsi" },
  { label: "Pimpinan Regu Utama Pasukan Penggalang (PRATAMA)", penyetaraan: "Juara 2 tk. Provinsi" },
  { label: "Ketua Organisasi Lain Dalam Sekolah (ditetapkan Kepala Satuan Pendidikan)", penyetaraan: "Juara 1 Kab/Kota" },
  { label: "Ketua Majelis Permusyawaratan Kelas (MPK)", penyetaraan: "Juara 1 Kab/Kota" },
];

const TABEL_PASKIBRAKA = [
  { prestasi: "Juara 1 Lomba Baris Berbaris (LBB/LPBB/LKBB) Nasional", perorangan: "—", beregu: "Juara 1 Nasional" },
  { prestasi: "Juara 2 Lomba Baris Berbaris (LBB/LPBB/LKBB) Nasional", perorangan: "—", beregu: "Juara 2 Nasional" },
  { prestasi: "Juara 3 Lomba Baris Berbaris (LBB/LPBB/LKBB) Nasional", perorangan: "—", beregu: "Juara 3 Nasional" },
  { prestasi: "Juara Harapan (I,II,III) LBB/LPBB/LKBB Nasional", perorangan: "—", beregu: "Juara Harapan Nasional" },
  { prestasi: "Juara Danton Terbaik Nasional", perorangan: "Juara Harapan Nasional", beregu: "—" },
  { prestasi: "Juara 1 Lomba Regu Pengibar Bendera (RUKIBRA/LFPB) Nasional", perorangan: "—", beregu: "Juara 1 Nasional" },
  { prestasi: "Juara 2 Lomba Regu Pengibar Bendera (RUKIBRA/LFPB) Nasional", perorangan: "—", beregu: "Juara 2 Nasional" },
  { prestasi: "Juara 3 Lomba Regu Pengibar Bendera (RUKIBRA/LFPB) Nasional", perorangan: "—", beregu: "Juara 3 Nasional" },
  { prestasi: "Juara 1 Lomba Baris Berbaris (LBB/LPBB/LKBB) Provinsi", perorangan: "—", beregu: "Juara 1 Provinsi" },
  { prestasi: "Juara 2 Lomba Baris Berbaris (LBB/LPBB/LKBB) Provinsi", perorangan: "—", beregu: "Juara 2 Provinsi" },
  { prestasi: "Juara 3 Lomba Baris Berbaris (LBB/LPBB/LKBB) Provinsi", perorangan: "—", beregu: "Juara 3 Provinsi" },
  { prestasi: "Juara Harapan (I,II,III) LBB/LPBB/LKBB Provinsi", perorangan: "—", beregu: "Juara Harapan Provinsi" },
  { prestasi: "Juara Danton Terbaik Provinsi", perorangan: "Juara Harapan Provinsi", beregu: "—" },
  { prestasi: "Juara 1 Lomba Regu Pengibar Bendera (RUKIBRA/LFPB) Provinsi", perorangan: "—", beregu: "Juara 1 Provinsi" },
  { prestasi: "Juara 2 Lomba Regu Pengibar Bendera (RUKIBRA/LFPB) Provinsi", perorangan: "—", beregu: "Juara 2 Provinsi" },
  { prestasi: "Juara 3 Lomba Regu Pengibar Bendera (RUKIBRA/LFPB) Provinsi", perorangan: "—", beregu: "Juara 3 Provinsi" },
  { prestasi: "Juara 1 Lomba Baris Berbaris (LBB/LPBB/LKBB) Kabupaten/Kota", perorangan: "—", beregu: "Juara 1 Kab/Kota" },
  { prestasi: "Juara 2 Lomba Baris Berbaris (LBB/LPBB/LKBB) Kabupaten/Kota", perorangan: "—", beregu: "Juara 2 Kab/Kota" },
  { prestasi: "Juara 3 Lomba Baris Berbaris (LBB/LPBB/LKBB) Kabupaten/Kota", perorangan: "—", beregu: "Juara 3 Kab/Kota" },
  { prestasi: "Juara Harapan (I,II,III) LBB/LPBB/LKBB Kabupaten/Kota", perorangan: "—", beregu: "Juara Harapan Kab/Kota" },
  { prestasi: "Juara Danton Terbaik Kabupaten/Kota", perorangan: "Juara Harapan Kab/Kota", beregu: "—" },
  { prestasi: "Juara 1 Lomba Regu Pengibar Bendera (RUKIBRA/LFPB) Kabupaten/Kota", perorangan: "—", beregu: "Juara 1 Kab/Kota" },
  { prestasi: "Juara 2 Lomba Regu Pengibar Bendera (RUKIBRA/LFPB) Kabupaten/Kota", perorangan: "—", beregu: "Juara 2 Kab/Kota" },
  { prestasi: "Juara 3 Lomba Regu Pengibar Bendera (RUKIBRA/LFPB) Kabupaten/Kota", perorangan: "—", beregu: "Juara 3 Kab/Kota" },
];

const TABEL_HAFIZ = [
  { label: "Hafiz 11 – 30 Juz", penyetaraan: "Juara 1 Internasional" },
  { label: "Hafiz 7 – 10 Juz", penyetaraan: "Juara 1 Nasional" },
  { label: "Hafiz 4 – 6 Juz", penyetaraan: "Juara 1 Provinsi" },
  { label: "Hafiz 3 Juz", penyetaraan: "Juara 1 Kab/Kota" },
];

// ===== State =====
let jenjang = "SMA";
let jalurSMA = "rapor";
let jalurSMK = "rapor";

// ===== Helpers =====
function o(a) {
  let e = parseFloat(a);
  return isNaN(e) ? 0 : e;
}
function u(a) {
  return new Intl.NumberFormat("id-ID", { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(a);
}

function fieldHTML(label, placeholder, id) {
  return `<div class="field">
    <label for="${id}">${label}</label>
    <input type="number" id="${id}" placeholder="${placeholder}" min="0" value=""/>
  </div>`;
}

function breakdownHTML(lines) {
  return `<div class="breakdown">${lines.map((l) => `<p>${l}</p>`).join("")}</div>`;
}

function resultHTML(score) {
  return `<div class="result-box">
    <p class="result-label">Estimasi Skor Akhir</p>
    <p class="result-value">${u(score)}</p>
  </div>`;
}

function rumusHTML(text) {
  return `<div class="rumus-box"><span class="rumus-label">Rumus: </span>${text}</div>`;
}

function refButtonHTML() {
  return `<button type="button" class="ref-toggle" id="ref-open">Lihat referensi skor piagam kejuaraan<span class="ref-hint">Tabel A – F →</span></button>`;
}

// ===== Kalkulator per jalur =====
// SMA rapor: (50% × total rata-rata rapor 5 semester) + (50% × total TKA)
function calcSMARapor() {
  return {
    rumus: "(50% × total rata-rata nilai rapor 5 semester) + (50% × total TKA)",
    fields: [
      { id: "f1", label: "Total rata-rata rapor 5 semester", placeholder: "contoh: 450" },
      { id: "f2", label: "Total TKA", placeholder: "contoh: 150" },
    ],
    compute(vals) {
      const d = 0.5 * vals[0], c = 0.5 * vals[1];
      return { lines: [`(50% × ${u(vals[0])}) + (50% × ${u(vals[1])})`, `= (${u(d)}) + (${u(c)})`, `= ${u(d + c)}`], score: d + c };
    },
  };
}

// SMA kejuaraan: (50% × score piagam/sertifikat) + (50% × total TKA)
function calcSMAKejuaraan() {
  return {
    rumus: "(50% × score piagam/sertifikat) + (50% × total TKA)",
    ref: true,
    fields: [
      { id: "f1", label: "Score piagam/sertifikat", placeholder: "contoh: 355" },
      { id: "f2", label: "Total TKA", placeholder: "contoh: 150" },
    ],
    compute(vals) {
      const d = 0.5 * vals[0], c = 0.5 * vals[1];
      return { lines: [`(50% × ${u(vals[0])}) + (50% × ${u(vals[1])})`, `= (${u(d)}) + (${u(c)})`, `= ${u(d + c)}`], score: d + c };
    },
  };
}

// SMA non-akademik kejuaraan/kepemimpinan: (40% × rapor) + (60% × score)
function calcSMANonAkademik(category) {
  return {
    rumus: `(40% × total rata-rata nilai rapor 5 semester) + (60% × score ${category})`,
    ref: category === "kejuaraan",
    fields: [
      { id: "f1", label: "Total rata-rata rapor 5 semester", placeholder: "contoh: 400" },
      { id: "f2", label: `Score ${category}`, placeholder: "contoh: 235" },
    ],
    compute(vals) {
      const c1 = 0.4 * vals[0], c2 = 0.6 * vals[1];
      return { lines: [`(40% × ${u(vals[0])}) + (60% × ${u(vals[1])})`, `= (${u(c1)}) + (${u(c2)})`, `= ${u(c1 + c2)}`], score: c1 + c2 };
    },
  };
}

// SMK rapor: 100% × total rata-rata rapor 5 semester
function calcSMKRapor() {
  return {
    rumus: "100% × total rata-rata nilai rapor 5 semester",
    fields: [{ id: "f1", label: "Total rata-rata rapor 5 semester", placeholder: "contoh: 450" }],
    compute(vals) {
      return { lines: [`100% × ${u(vals[0])}`, `= ${u(vals[0])}`], score: vals[0] };
    },
  };
}

// SMK kejuaraan: (40% × rapor) + (60% × sertifikat)
function calcSMKKejuaraan() {
  return {
    rumus: "(40% × total rata-rata nilai rapor 5 semester) + (60% × sertifikat kejuaraan)",
    ref: true,
    fields: [
      { id: "f1", label: "Total rata-rata rapor 5 semester", placeholder: "contoh: 400" },
      { id: "f2", label: "Score sertifikat kejuaraan", placeholder: "contoh: 455" },
    ],
    compute(vals) {
      const c1 = 0.4 * vals[0], c2 = 0.6 * vals[1];
      return { lines: [`(40% × ${u(vals[0])}) + (60% × ${u(vals[1])})`, `= (${u(c1)}) + (${u(c2)})`, `= ${u(c1 + c2)}`], score: c1 + c2 };
    },
  };
}

// SMK non-akademik: (40% × rapor) + (60% × score)
function calcSMKNonAkademik(category) {
  return {
    rumus: `(40% × total rata-rata nilai rapor 5 semester) + (60% × score ${category})`,
    ref: category === "kejuaraan",
    fields: [
      { id: "f1", label: "Total rata-rata rapor 5 semester", placeholder: "contoh: 400" },
      { id: "f2", label: `Score ${category}`, placeholder: "contoh: 250" },
    ],
    compute(vals) {
      const c1 = 0.4 * vals[0], c2 = 0.6 * vals[1];
      return { lines: [`(40% × ${u(vals[0])}) + (60% × ${u(vals[1])})`, `= (${u(c1)}) + (${u(c2)})`, `= ${u(c1 + c2)}`], score: c1 + c2 };
    },
  };
}

function getCalc() {
  if (jenjang === "SMA") {
    if (jalurSMA === "rapor") return calcSMARapor();
    if (jalurSMA === "kejuaraan") return calcSMAKejuaraan();
    if (jalurSMA === "non-akademik-kejuaraan") return calcSMANonAkademik("kejuaraan");
    if (jalurSMA === "non-akademik-kepemimpinan") return calcSMANonAkademik("kepemimpinan");
  } else {
    if (jalurSMK === "rapor") return calcSMKRapor();
    if (jalurSMK === "kelas-industri") return null; // khusus
    if (jalurSMK === "kejuaraan") return calcSMKKejuaraan();
    if (jalurSMK === "non-akademik-kejuaraan") return calcSMKNonAkademik("kejuaraan");
    if (jalurSMK === "non-akademik-kepemimpinan") return calcSMKNonAkademik("kepemimpinan");
  }
}

// ===== Render Sidebar =====
function renderSidebar() {
  const jenjangBtns = document.getElementById("jenjang-buttons");
  jenjangBtns.innerHTML = ["SMA", "SMK"]
    .map((j) => `<button type="button" data-jenjang="${j}" class="${j === jenjang ? "active" : ""}">${j}</button>`)
    .join("");

  const jalur = jenjang === "SMA" ? JALUR_SMA : JALUR_SMK;
  const aktif = jenjang === "SMA" ? jalurSMA : jalurSMK;
  document.getElementById("jalur-buttons").innerHTML = jalur
    .map((p) => `<button type="button" data-jalur="${p.id}" class="${p.id === aktif ? "active" : ""}">${p.label}</button>`)
    .join("");

  document.getElementById("panel-jenjang").textContent = jenjang;
  document.getElementById("panel-jalur").textContent = (jalur.find((p) => p.id === aktif) || {}).label || "";
}

// ===== Render Kalkulator =====
function renderCalculator() {
  const container = document.getElementById("calculator");
  const aktif = jenjang === "SMA" ? jalurSMA : jalurSMK;

  if (jenjang === "SMK" && aktif === "kelas-industri") {
    renderKelasIndustri(container);
    return;
  }

  const calc = getCalc();
  let html = `<div class="space-y-5">`;
  html += rumusHTML(calc.rumus);
  if (calc.ref) html += refButtonHTML();
  html += `<div class="grid-2">`;
  calc.fields.forEach((f) => { html += fieldHTML(f.label, f.placeholder, f.id); });
  html += `</div>`;
  html += `<div id="breakdown">${breakdownHTML(calc.compute(calc.fields.map(() => 0)).lines)}</div>`;
  html += `<div id="result">${resultHTML(calc.compute(calc.fields.map(() => 0)).score)}</div>`;
  html += `</div>`;
  container.innerHTML = html;

  const inputs = calc.fields.map((f) => document.getElementById(f.id));
  const update = () => {
    const vals = inputs.map((inp) => o(inp.value));
    const res = calc.compute(vals);
    document.getElementById("breakdown").innerHTML = breakdownHTML(res.lines);
    document.getElementById("result").innerHTML = resultHTML(res.score);
  };
  inputs.forEach((inp) => inp.addEventListener("input", update));

  const refBtn = document.getElementById("ref-open");
  if (refBtn) refBtn.addEventListener("click", () => (document.getElementById("ref-modal").hidden = false));
}

// SMK kelas industri:
// Per semester: (BI×2 + Mat×3 + IPA×3 + IPS×1 + B.Ing×2) ÷ 5
// Score akhir = jumlah semester 1 s.d. 5
function renderKelasIndustri(container) {
  let rowsHtml = "";
  for (let s = 1; s <= 5; s++) {
    rowsHtml += `<tr data-sem="${s}">
      <td><p class="sem-label">Semester ${s}</p><p class="sem-score" id="sem-score-${s}">0</p></td>
      ${MATA_PELAJARAN.map((m) => `<td><input type="number" data-sem="${s}" data-key="${m.key}" placeholder="0" min="0" max="100" value=""/></td>`).join("")}
    </tr>`;
  }

  container.innerHTML = `<div class="space-y-5">
    ${rumusHTML("Per semester: (BI×2 + Mat×3 + IPA×3 + IPS×1 + B.Ing×2) ÷ 5. Score akhir = jumlah semester 1 s.d. 5.")}
    <div class="table-wrap">
      <table>
        <thead><tr>
          <th></th>
          ${MATA_PELAJARAN.map((m) => `<th>${m.label}<span class="weight-tag">×${m.weight}</span></th>`).join("")}
        </tr></thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    </div>
    <div class="rincian">
      <p class="rincian-title">Rincian per semester</p>
      <p class="mono" id="rincian-sem"></p>
      <p class="mono" id="rincian-total"></p>
    </div>
    <div id="result"></div>
  </div>`;

  const inputs = container.querySelectorAll("input");
  const update = () => {
    const scores = [];
    for (let s = 1; s <= 5; s++) {
      let sum = 0;
      MATA_PELAJARAN.forEach((m) => {
        const inp = container.querySelector(`input[data-sem="${s}"][data-key="${m.key}"]`);
        sum += o(inp.value) * m.weight;
      });
      const semScore = sum / MATA_PELAJARAN.length;
      scores.push(semScore);
      document.getElementById(`sem-score-${s}`).textContent = u(semScore);
    }
    const total = scores.reduce((a, b) => a + b, 0);
    document.getElementById("rincian-sem").textContent = scores.map((v, i) => `Sem ${i + 1}: ${u(v)}`).join(" | ");
    document.getElementById("rincian-total").innerHTML = `Score akhir = ${scores.map((v) => u(v)).join(" + ")} = <span style="font-weight:600;color:var(--foreground)">${u(total)}</span>`;
    document.getElementById("result").innerHTML = resultHTML(total);
  };
  inputs.forEach((inp) => inp.addEventListener("input", update));
  update();
}

// ===== Tabel referensi =====
function tabelTingkatHTML(rows) {
  return `<div class="ref-table"><table>
    <thead><tr><th>Tingkat</th><th>Wilayah</th><th class="num">Tunggal</th><th class="num">Beregu</th></tr></thead>
    <tbody>${rows.map((r) => `<tr><td>${r.rank}</td><td>${r.wilayah}</td><td class="num" style="font-weight:600;color:var(--foreground)">${r.tunggal}</td><td class="num" style="font-weight:600;color:var(--foreground)">${r.beregu}</td></tr>`).join("")}</tbody>
  </table></div>`;
}

function tabelPrestasiHTML(rows) {
  return `<div class="ref-table"><table>
    <thead><tr><th>Prestasi</th><th class="center">Perorangan</th><th class="center">Beregu</th></tr></thead>
    <tbody>${rows.map((r) => `<tr><td>${r.prestasi}</td><td class="center" style="color:var(--foreground)">${r.perorangan}</td><td class="center" style="color:var(--foreground)">${r.beregu}</td></tr>`).join("")}</tbody>
  </table></div>`;
}

function tabelLabelHTML(rows, colLabel) {
  return `<div class="ref-table"><table>
    <thead><tr><th>${colLabel}</th><th>Penyetaraan Skor</th></tr></thead>
    <tbody>${rows.map((r) => `<tr><td>${r.label}</td><td class="penyetaraan">${r.penyetaraan}</td></tr>`).join("")}</tbody>
  </table></div>`;
}

function renderReferenceTables() {
  document.getElementById("ref-a").innerHTML = tabelTingkatHTML(TABEL_KEMDIKBUD);
  document.getElementById("ref-b").innerHTML = tabelTingkatHTML(TABEL_LUAR_KEMEN);
  document.getElementById("ref-c").innerHTML = tabelPrestasiHTML(TABEL_PRAMUKA);
  document.getElementById("ref-d").innerHTML = tabelLabelHTML(TABEL_OSIS, "Jabatan Organisasi");
  document.getElementById("ref-e").innerHTML = tabelPrestasiHTML(TABEL_PASKIBRAKA);
  document.getElementById("ref-f").innerHTML = tabelLabelHTML(TABEL_HAFIZ, "Kemampuan Hafiz");
}

// ===== Events =====
document.getElementById("jenjang-buttons").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-jenjang]");
  if (!btn) return;
  jenjang = btn.dataset.jenjang;
  renderSidebar();
  renderCalculator();
});

document.getElementById("jalur-buttons").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-jalur]");
  if (!btn) return;
  if (jenjang === "SMA") jalurSMA = btn.dataset.jalur;
  else jalurSMK = btn.dataset.jalur;
  renderSidebar();
  renderCalculator();
});

document.getElementById("ref-close").addEventListener("click", () => (document.getElementById("ref-modal").hidden = true));
document.getElementById("ref-modal").addEventListener("click", () => (document.getElementById("ref-modal").hidden = true));

// ===== Theme toggle =====
const themeToggle = document.getElementById("theme-toggle");
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("spmb-theme", theme);
}
const savedTheme = localStorage.getItem("spmb-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(savedTheme);
themeToggle.addEventListener("click", () => {
  applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

// ===== Init =====
renderSidebar();
renderCalculator();
renderReferenceTables();
