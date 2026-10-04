// 1. Mengambil elemen dari HTML

const inputTask = document.getElementById('inputTask');
const listContainer = document.getElementById('listContainer');
const tombol = document.getElementById('tombol');


// 2. Menambahkan tugas

tombol.onclick = function() {
    if (inputTask.value === '') {
        alert('Kamu belum memasukkan tugas!');
    } else {
        const li = document.createElement('li');
        li.textContent = inputTask.value;

// Membuat tombol hapus ×
        const span = document.createElement('span');
        span.textContent = '×';

        li.append(span);
        listContainer.append(li);

 // Mengosongkan input
        inputTask.value = '';

 // Memperbarui statistik
        updateStats();
    }
};


// 3. Menandai tugas selesai

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('done');

// Memperbarui statistik
        updateStats();
    }
});


// 4. Menghapus tugas

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();

// Memperbarui statistik
        updateStats();
    }
});


// 5. Menambahkan tugas dengan tombol Enter

inputTask.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        tombol.click();
    }
});


// 6. Mengambil elemen statistik dari HTML
const totalTugas = document.getElementById('totalTugas');
const tugasSelesai = document.getElementById('tugasSelesai');
const tugasBelumSelesai = document.getElementById('tugasBelumSelesai');


// 7. Memperbarui statistik tugas
function updateStats() {
 const semuaTugas = listContainer.querySelectorAll('li');
const jumlahSelesai = listContainer.querySelectorAll('li.done').length;

totalTugas.textContent = semuaTugas.length;
tugasSelesai.textContent = jumlahSelesai;
tugasBelumSelesai.textContent = semuaTugas.length - jumlahSelesai;
}


