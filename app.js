function conteoVideos(details, div){

    const diseño = document.querySelector(details);
    const div_diseño = diseño.querySelectorAll("div");
    // console.log(div_diseño.length - 1);
    // console.log(div_diseño);
    
    const videos = document.querySelector(div);
    videos.textContent = `${div_diseño.length - 1} videos`
}
conteoVideos(".diseño", ".video-diseño");
conteoVideos(".arte", ".video-arte");
conteoVideos(".musica", ".video-musica");
conteoVideos(".programacion", ".video-programacion");
conteoVideos(".redes", ".video-redes");
conteoVideos(".blog", ".video-blog");
conteoVideos(".jams", ".video-jams");