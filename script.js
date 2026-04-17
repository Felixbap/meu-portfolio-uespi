document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('radio-audio');
    const toggleBtn = document.getElementById('radio-toggle');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const muteBtn = document.getElementById('radio-mute');
    const muteOffIcon = document.getElementById('mute-off-icon');
    const muteOnIcon = document.getElementById('mute-on-icon');

    const streamUrl = "https://servidor35.brlogic.com:8470/live"; 
    let isPlaying = false;
    let isMuted = false;

    if (toggleBtn && audio) {
        toggleBtn.addEventListener('click', () => {
            if (!isPlaying) {
                audio.src = streamUrl;
                audio.play().then(() => {
                    isPlaying = true;
                    playIcon.classList.add('hidden');
                    pauseIcon.classList.remove('hidden');
                    toggleBtn.classList.add('bg-red-500', 'animate-pulse');
                }).catch(console.error);
            } else {
                audio.pause();
                isPlaying = false;
                playIcon.classList.remove('hidden');
                pauseIcon.classList.add('hidden');
                toggleBtn.classList.remove('bg-red-500', 'animate-pulse');
            }
        });
    }

    if (muteBtn && audio) {
        muteBtn.addEventListener('click', () => {
            isMuted = !isMuted;
            audio.muted = isMuted;
            if (isMuted) {
                muteOffIcon.classList.add('hidden');
                muteOnIcon.classList.remove('hidden');
            } else {
                muteOffIcon.classList.remove('hidden');
                muteOnIcon.classList.add('hidden');
            }
        });
    }

    const projetos = [
        {
            titulo: "Identidade Black FM",
            categoria: "Branding",
            imagem: "logo.jpeg" 
        },
        {
            titulo: "Design de Folders",
            categoria: "Editorial",
            imagem: "https://picsum.photos/seed/folder/800/600"
        },
        {
            titulo: "Social Media Ads",
            categoria: "Digital",
            imagem: "https://picsum.photos/seed/social/800/600"
        }
    ];

    const portfolioContainer = document.getElementById('portfolio-container');
    
    if (portfolioContainer) {
        projetos.forEach(projeto => {
            const card = document.createElement('div');
            card.className = "group relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-[#121212] border border-white/5";
            
            card.innerHTML = `
                <img src="${projeto.imagem}" alt="${projeto.titulo}" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0">
                <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
                <div class="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p class="text-brand-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-2">${projeto.categoria}</p>
                    <h3 class="text-2xl font-serif font-bold text-white">${projeto.titulo}</h3>
                </div>
            `;
            portfolioContainer.appendChild(card);
        });
    }
});