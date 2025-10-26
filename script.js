// Kalp animasyonları oluştur
function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 6 + 's';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heartsContainer.appendChild(heart);
    }
}

// Mobil için yüzen kalpler
function createFloatingHearts() {
    const floatingContainer = document.querySelector('.floating-hearts');
    const hearts = ['💕', '💖', '💗', '💝', '💘', '💞', '💓', '💟'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        floatingContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 2000);
}

// Titreşim efekti
function vibrate() {
    if ('vibrate' in navigator) {
        navigator.vibrate([100, 50, 100]);
    }
}

// Dokunmatik efekt oluştur
function createTouchEffect(event) {
    const touchEffectsContainer = document.querySelector('.touch-effects');
    const rect = event.target.getBoundingClientRect();
    const x = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
    const y = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
    
    const effect = document.createElement('div');
    effect.className = 'touch-effect';
    effect.style.left = (x - rect.left) + 'px';
    effect.style.top = (y - rect.top) + 'px';
    touchEffectsContainer.appendChild(effect);
    
    setTimeout(() => {
        effect.remove();
    }, 1000);
}

// Buton ripple efekti
function createRippleEffect(event) {
    const button = event.currentTarget;
    const ripple = button.querySelector('.btn-ripple');
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.animation = 'none';
    ripple.offsetHeight; // Trigger reflow
    ripple.style.animation = 'ripple 0.6s linear';
}

// Fotoğraf tıklama efekti
function createPhotoEffect() {
    const photoFrame = document.querySelector('.photo-frame');
    const photoHearts = document.querySelector('.photo-hearts');
    
    // Titreşim efekti
    if ('vibrate' in navigator) {
        navigator.vibrate([50, 25, 50]);
    }
    
    // Fotoğraf etrafında kalp efektleri
    const hearts = ['💖', '💕', '💗', '💝', '💘'];
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'absolute';
            heart.style.fontSize = '1.5rem';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.transform = 'translate(-50%, -50%)';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '10';
            
            // Rastgele yön için açı hesapla
            const angle = (i * 45) + Math.random() * 30;
            const distance = 80 + Math.random() * 40;
            const endX = Math.cos(angle * Math.PI / 180) * distance;
            const endY = Math.sin(angle * Math.PI / 180) * distance;
            
            heart.style.animation = `photoHeartExplode 1.5s ease-out forwards`;
            heart.style.setProperty('--endX', endX + 'px');
            heart.style.setProperty('--endY', endY + 'px');
            
            photoHearts.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 1500);
        }, i * 100);
    }
    
    // Fotoğraf büyüme efekti
    photoFrame.style.transform = 'scale(1.1) rotate(5deg)';
    setTimeout(() => {
        photoFrame.style.transform = 'scale(1.05) rotate(2deg)';
    }, 200);
    
    // Özel ses efekti
    playPhotoSound();
}

// Fotoğraf için özel ses
function playPhotoSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Daha yumuşak bir ses
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
        console.log('Fotoğraf sesi çalınamadı:', error);
    }
}

// Havai fişek efekti
function createFireworks() {
    const fireworksContainer = document.querySelector('.fireworks');
    
    for (let i = 0; i < 50; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + '%';
        firework.style.top = Math.random() * 100 + '%';
        firework.style.animationDelay = Math.random() * 2 + 's';
        firework.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
        fireworksContainer.appendChild(firework);
    }
}

// Evet butonuna tıklandığında
function showYesResponse() {
    const yesResponse = document.getElementById('yesResponse');
    const noResponse = document.getElementById('noResponse');
    const buttons = document.querySelector('.buttons');
    
    // Diğer seçenekleri gizle
    buttons.style.display = 'none';
    noResponse.style.display = 'none';
    
    // Evet cevabını göster
    yesResponse.style.display = 'block';
    
    // Gelişmiş titreşim efekti
    if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200, 100, 400]);
    }
    
    // Havai fişek efekti başlat
    createFireworks();
    
    // Konfeti efekti
    createConfetti();
    
    // Başarı sesi (varsa)
    playSuccessSound();
    
    // Mobil için özel kalp yağmuru
    createHeartRain();
    
    // Sayfayı yukarı kaydır
    yesResponse.scrollIntoView({ behavior: 'smooth' });
}

// Hayır butonuna tıklandığında
function showNoResponse() {
    const noResponse = document.getElementById('noResponse');
    const yesResponse = document.getElementById('yesResponse');
    const buttons = document.querySelector('.buttons');
    
    // Diğer seçenekleri gizle
    buttons.style.display = 'none';
    yesResponse.style.display = 'none';
    
    // Hayır cevabını göster
    noResponse.style.display = 'block';
    
    // Üzüntü efekti
    createSadEffect();
    
    // Sayfayı yukarı kaydır
    noResponse.scrollIntoView({ behavior: 'smooth' });
}

// Konfeti efekti
function createConfetti() {
    const colors = ['#ff6b9d', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.zIndex = '1000';
        confetti.style.borderRadius = '50%';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        // Konfeti'yi 5 saniye sonra kaldır
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Üzüntü efekti
function createSadEffect() {
    // Sayfayı hafifçe sallama efekti
    document.body.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
}

// Başarı sesi (web audio API kullanarak)
function playSuccessSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Basit bir başarı melodisi
        const frequencies = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, C
        
        frequencies.forEach((freq, index) => {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.5);
            }, index * 200);
        });
    } catch (error) {
        console.log('Ses çalınamadı:', error);
    }
}

// Kalp yağmuru efekti
function createHeartRain() {
    const hearts = ['💕', '💖', '💗', '💝', '💘', '💞', '💓', '💟', '💌', '💋'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.fontSize = '2rem';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '-50px';
            heart.style.zIndex = '1000';
            heart.style.pointerEvents = 'none';
            heart.style.animation = `heartFall ${Math.random() * 2 + 2}s linear forwards`;
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, i * 100);
    }
}

// Cihaz sensörleri (gyroscope)
function setupDeviceSensors() {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function(event) {
            const beta = event.beta; // X ekseni
            const gamma = event.gamma; // Y ekseni
            
            // Telefonu salladığında kalp efekti
            if (Math.abs(beta) > 30 || Math.abs(gamma) > 30) {
                createFloatingHearts();
            }
        });
    }
}

// Swipe gesture desteği
function setupSwipeGestures() {
    let startX, startY, endX, endY;
    
    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;
        
        const diffX = endX - startX;
        const diffY = endY - startY;
        
        // Sağa swipe - Evet
        if (diffX > 100 && Math.abs(diffY) < 100) {
            showYesResponse();
        }
        // Sola swipe - Hayır
        else if (diffX < -100 && Math.abs(diffY) < 100) {
            showNoResponse();
        }
    });
}

// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    // Kalp animasyonlarını başlat
    createHearts();
    
    // Mobil özel efektleri başlat
    createFloatingHearts();
    setupDeviceSensors();
    setupSwipeGestures();
    
    // Sayfa yüklenme animasyonu
    const mainContent = document.querySelector('.main-content');
    mainContent.style.opacity = '0';
    mainContent.style.transform = 'translateY(50px)';
    
    setTimeout(() => {
        mainContent.style.transition = 'all 1s ease-out';
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0)';
    }, 500);
    
    // Butonlara hover efekti (PC için)
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        button.addEventListener('mouseleave', function() {
            if (this.classList.contains('yes-btn')) {
                this.style.transform = 'scale(1.1)';
            } else {
                this.style.transform = 'scale(1)';
            }
        });
        
        // Ripple efekti için click event
        button.addEventListener('click', createRippleEffect);
    });
    
    // Mobil cihaz tespiti
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
        document.body.classList.add('mobile-device');
    }
});

// CSS animasyonları için ek stiller
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
    
    @keyframes heartFall {
        0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes photoHeartExplode {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.8;
        }
        100% {
            transform: translate(-50%, -50%) scale(2) translate(var(--endX, 0px), var(--endY, 0px));
            opacity: 0;
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .mobile-device .main-content {
        transform: none !important;
    }
    
    .mobile-device .main-content:hover {
        transform: none !important;
    }
`;
document.head.appendChild(style);
