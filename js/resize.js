document.addEventListener('DOMContentLoaded', function() {
    function resizeContainer() {

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const container = document.querySelector('.ongoingsContainer');

        if (container) {
            container.style.width = `${screenWidth - 16}px`;
        }
    }

    const mediaQuery = window.matchMedia('(max-width: 570px)');

    function handleMediaChange(e) {

        if (e.matches) {
            resizeContainer();
            window.addEventListener('resize', resizeContainer);
        } else {
            window.removeEventListener('resize', resizeContainer);
            const container = document.querySelector('.ongoingsContainer');
            if (container) {
                container.style.width = 'auto';
            }
        }
    }

    mediaQuery.addEventListener('change', handleMediaChange);
    handleMediaChange(mediaQuery);
});

