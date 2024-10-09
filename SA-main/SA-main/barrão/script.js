document.addEventListener('DOMContentLoaded', function () {
    const playPauseButton = document.getElementById('play-pause');
    const audio = document.getElementById('audio');
    const progressBar = document.getElementById('progress-bar');
    const playlist = document.querySelectorAll('#playlist li');
    const likeBtn = document.getElementById('like-btn');
    const albumImage = document.querySelector('.album-info img'); // Seleciona a imagem principal do álbum
    let isPlaying = false;
    let currentSongIndex = 0;
    let likedSongs = new Set();

    // Carregar música atual
    function loadSong(index) {
        const selectedSong = playlist[index];
        const songSrc = selectedSong.getAttribute('data-src');
        const songImg = selectedSong.getAttribute('data-img'); // Obtém o caminho da imagem
        audio.src = songSrc;
        audio.load();
        // Atualizar título e artista
        document.querySelector('.album-info h2').textContent = selectedSong.textContent.split(' - ')[1];
        document.querySelector('.album-info p').textContent = selectedSong.textContent.split(' - ')[0];
        albumImage.src = songImg; // Atualiza a imagem do álbum
        playPauseButton.innerHTML = '<i class="ri-play-fill"></i>';
        isPlaying = false;
    }

    // Iniciar com a primeira música
    loadSong(currentSongIndex);

    // Play/Pause
    playPauseButton.addEventListener('click', function () {
        if (isPlaying) {
            audio.pause();
            playPauseButton.innerHTML = '<i class="ri-play-fill"></i>';
        } else {
            audio.play();
            playPauseButton.innerHTML = '<i class="ri-pause-fill"></i>';
        }
        isPlaying = !isPlaying;
    });

    // Atualiza a barra de progresso conforme o tempo da música
    audio.addEventListener('timeupdate', updateProgress);

    function updateProgress() {
        const { duration, currentTime } = audio;
        const percent = (currentTime / duration) * 100;
        progressBar.style.width = `${percent}%`;
    }

    // Permitir que o usuário avance o progresso da música clicando na barra
    document.getElementById('progress-container').addEventListener('click', function (event) {
        const width = this.clientWidth;
        const clickX = event.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    });

    // Funções para próximo e anterior
    document.getElementById('next').addEventListener('click', function () {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
        audio.play();
    });

    document.getElementById('prev').addEventListener('click', function () {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentSongIndex);
        audio.play();
    });

    // Função de curtidas
    likeBtn.addEventListener('click', function () {
        const currentSong = playlist[currentSongIndex];
        if (likedSongs.has(currentSong.textContent)) {
            likedSongs.delete(currentSong.textContent);
            likeBtn.innerHTML = '<i class="ri-heart-line"></i>'; // Mudar para ícone não curtido
        } else {
            likedSongs.add(currentSong.textContent);
            likeBtn.innerHTML = '<i class="ri-heart-fill"></i>'; // Mudar para ícone curtido
        }
    });
});
