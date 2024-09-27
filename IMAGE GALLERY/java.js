// List of example image URLs and captions
const images = [
    { src: "https://plus.unsplash.com/premium_photo-1675805015392-28fd80c551ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8MHwwfHx8MQ%3D%3D", alt: "Beautiful natural landscape" },
    { src: "https://plus.unsplash.com/premium_photo-1675826774815-35b8a48ddc2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8MHwwfHx8MQ%3D%3D", alt: "Stunning mountain view" },
    { src: "https://plus.unsplash.com/premium_photo-1675368244123-082a84cf3072?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8MHwwfHx8MQ%3D%3D", alt: "Serene forest scene" },
    { src: "https://plus.unsplash.com/premium_photo-1673697239936-c2599b0b0498?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8MHwwfHx8MQ%3D%3D", alt: "Majestic snow-covered peaks" },
    { src: "https://plus.unsplash.com/premium_photo-1673697239984-b089baf7b6e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDB8MHx8fDE%3D", alt: "Desert landscape with dunes" },
    { src: "https://plus.unsplash.com/premium_photo-1669218058060-fe92956306cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfDB8MHx8fDE%3D", alt: "Beach with a sunset view" },
    { src: "https://plus.unsplash.com/premium_photo-1669613233557-1676c121fe73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW52aXJvbm1lbnR8ZW58MHwwfDB8fHww", alt: "River flowing through forest" },
    { src: "https://plus.unsplash.com/premium_photo-1712685912275-943ff90aac7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfDB8MHx8fDE%3D", alt: "City skyline at night" },
    { src: "https://tse2.mm.bing.net/th?id=OIP.Pq8MPxEGieC4WCJZzGYV2wHaEo&pid=Api&P=0&h=220", alt: "Colorful abstract art" },
    { src: "https://tse3.mm.bing.net/th?id=OIP.roeJGz3eeyhxK3XRQ0LxpQHaFj&pid=Api&P=0&h=220", alt: "Modern architecture" },
    { src: "https://tse4.mm.bing.net/th?id=OIP.HT2MhcNUZuI5eC_iU48gywHaFB&pid=Api&P=0&h=220", alt: "Classic car" },
    { src: "https://tse3.mm.bing.net/th?id=OIP.2bGkf8kw-03I4W39k55LKwHaEo&pid=Api&P=0&h=220", alt: "Historic landmark" },
    { src: "https://tse2.mm.bing.net/th?id=OIP.DpcLyyRCeTWoiiMNdCTXxQHaEK&pid=Api&P=0&h=220", alt: "Cozy living room" },
    { src: "https://tse4.mm.bing.net/th?id=OIP._Fx3L11OwExRkIFwtwFPPAHaEo&pid=Api&P=0&h=220", alt: "Sunny beach" },
    { src: "https://tse2.mm.bing.net/th?id=OIP.PcX5mOVMNF6P3LafvjBAUQHaE7&pid=Api&P=0&h=220", alt: "Mountain trail" },
    { src: "https://tse4.mm.bing.net/th?id=OIP.anXJh_z_eiutS-mZNM0B7gHaEK&pid=Api&P=0&h=220", alt: "Urban street view" },
    { src: "https://tse1.mm.bing.net/th?id=OIP.LvLGqjb3g4ygicN_Iw0PigHaEo&pid=Api&P=0&h=220", alt: "Fresh flowers" },
    { src: "https://tse4.mm.bing.net/th?id=OIP.KBakfbaN7EYkOF2wMA09XgHaEK&pid=Api&P=0&h=220", alt: "Snowy forest" },
    { src: "https://tse1.mm.bing.net/th?id=OIP.FaKu0c_POMvHSqkQcVqxbwHaDg&pid=Api&P=0&h=220", alt: "River with autumn leaves" },
    { src: "https://tse1.mm.bing.net/th?id=OIP.kRe32hWZRF_jraeTfj32bAHaEK&pid=Api&P=0&h=220", alt: "Traditional market" },
    { src: "https://tse3.mm.bing.net/th?id=OIP.0cxepc_s-q3v4lYrCQVgAAHaE8&pid=Api&P=0&h=220", alt: "Lakeside view" },
    { src: "https://tse3.mm.bing.net/th?id=OIP.vCsXoPsEdpqKzcdMHX6wCQHaE4&pid=Api&P=0&h=220", alt: "Flowering garden" },
    { src: "https://tse1.mm.bing.net/th?id=OIP.c10sX6EVjreQo2iqy3ecggHaEK&pid=Api&P=0&h=220", alt: "Sunset over ocean" },
    { src: "https://tse2.mm.bing.net/th?id=OIP.yxD5rYx77zogjOiMLCkdqwHaEK&pid=Api&P=0&h=220", alt: "City park" },
    { src: "https://tse3.mm.bing.net/th?id=OIP.Y1bykzqxTGWQOKoxb1r8nQHaEo&pid=Api&P=0&h=220", alt: "Cultural festival" },
    { src: "https://tse4.mm.bing.net/th?id=OIP.YauZ4JyrxAV2Lh3UQgeOZAHaEK&pid=Api&P=0&h=220", alt: "Rustic barn" },
    { src: "https://tse2.mm.bing.net/th?id=OIP.JlYNhV7cKk6hbEd9rRQg2gHaEc&pid=Api&P=0&h=220", alt: "Scenic waterfall" },
    { src: "https://tse2.mm.bing.net/th?id=OIP.iDsWmerhTBUbvBJa_bpqjAHaEK&pid=Api&P=0&h=220", alt: "Mountain landscape" },
    { src: "https://tse3.mm.bing.net/th?id=OIP.AbtqiVQL4mbG9ByiJXaDlwHaEK&pid=Api&P=0&h=220", alt: "Countryside road" },
    { src: "https://tse2.mm.bing.net/th?id=OIP.iDsWmerhTBUbvBJa_bpqjAHaEK&pid=Api&P=0&h=220", alt: "Artistic sculpture" },
    { src: "https://tse3.mm.bing.net/th?id=OIP.AWxRuRoFVK6OnR_hwbSeLQHaEo&pid=Api&P=0&h=220", alt: "Starry night sky" },
    { src: "https://tse4.mm.bing.net/th?id=OIP.RciXrncbXFTnfynsyiluOQHaEo&pid=Api&P=0&h=220", alt: "Modern cityscape" },
    { src: "https://tse1.mm.bing.net/th?id=OIP.Y5YAwKJUFlWZMDtqSURJlwHaEK&pid=Api&P=0&h=220", alt: "Vibrant street art" },
    { src: "https://tse2.mm.bing.net/th?id=OIP.yTL8C6sZuwdp6m05AY1oTAHaEK&pid=Api&P=0&h=220", alt: "Snow-capped mountains" },
    { src: "https://tse1.mm.bing.net/th?id=OIP.yV85zPmFqkM_-L2fWczwEQHaEK&pid=Api&P=0&h=220", alt: "Bright city lights" },
    { src: "https://tse2.mm.bing.net/th?id=OIP.WxBgUpa7nWlQ_ulgE_1lJAHaEo&pid=Api&P=0&h=220", alt: "Quiet beach" },
    { src: "https://tse3.mm.bing.net/th?id=OIP.gXtqjkYUS2mfUCIrLKdmNgHaEK&pid=Api&P=0&h=220", alt: "Forest path" },
    { src: "https://tse2.mm.bing.net/th?id=OIP.WIPlVI5L7CP66P4IwBIRBwHaEK&pid=Api&P=0&h=220", alt: "Autumn leaves" },
    { src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5hdHVyZXxlbnwwfHx8fDE2OTQ3OTI1Mzk&ixlib=rb-1.2.1&q=80&w=400", alt: "Beautiful natural landscape" },
    { src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fG5hdHVyZXxlbnwwfHx8fDE2OTQ3OTI1Mzk&ixlib=rb-1.2.1&q=80&w=400", alt: "Stunning mountain view" },
    { src: "https://images.unsplash.com/photo-1726338363658-82554516b959?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8", alt: "Nature view with bright sky" },
    { src: "https://images.unsplash.com/photo-1726247419938-a8980d9fa429?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8", alt: "Hillside scenery" },
    { src: "https://images.unsplash.com/photo-1721332154191-ba5f1534266e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D", alt: "Mountain landscape" },
    { src: "https://plus.unsplash.com/premium_photo-1701094772081-043554068ae5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D", alt: "Premium photo of landscape" },
    { src: "https://images.unsplash.com/photo-1726053468122-6416a30793dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8", alt: "Scenic outdoor view" },
    { src: "https://images.unsplash.com/photo-1726092707889-c4ef049d22df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D", alt: "Urban nature blend" },
    { src: "https://images.unsplash.com/photo-1726250864867-ad1dabb63c58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D", alt: "Scenic rural view" },
    { src: "https://images.unsplash.com/photo-1726074346607-a4882e522d24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D", alt: "Outdoor field view" },
    { src: "https://plus.unsplash.com/premium_photo-1674147611070-bbca5e2725e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D", alt: "Premium urban view" },
    { src: "https://images.unsplash.com/photo-1723811481178-d383b3be4605?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D", alt: "Cityscape" },
    { src: "https://images.unsplash.com/photo-1726450357089-3c82f522dd1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D", alt: "Urban skyline" },
    { src: "https://images.unsplash.com/photo-1726436877670-020a158bef47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D", alt: "Downtown architecture" },
    { src: "https://images.unsplash.com/photo-1719937050679-c3a2c9c67b0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D", alt: "Outdoor scene with mountains" },
    { src: "https://plus.unsplash.com/premium_photo-1676637000032-b301a8602764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D", alt: "Premium rural view" },
    { src: "https://images.unsplash.com/photo-1725986038200-383d1925a822?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D", alt: "Scenic river landscape" },
    { src: "https://images.unsplash.com/photo-1726180839154-cc98e2df7f9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D", alt: "Winding road in nature" },
    
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const caption = document.getElementById('caption');
let currentIndex = 0;

// Function to display images dynamically in the gallery
function displayImages() {
    gallery.innerHTML = ''; // Clear gallery
    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.addEventListener('click', () => {
            openModal(index);
        });
        gallery.appendChild(imgElement);
    });
}

// Function to open the modal and display the clicked image
function openModal(index) {
    modal.style.display = 'block';
    modalImg.src = images[index].src;
    caption.innerText = images[index].alt;
    currentIndex = index;
}

// Function to close the modal
document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});

// Navigation buttons in the modal
document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openModal(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    openModal(currentIndex);
});

// Close the modal when clicking outside the image
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Search function for filtering images
document.getElementById('search').addEventListener('keyup', (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredImages = images.filter(image => image.alt.toLowerCase().includes(searchValue));
    
    gallery.innerHTML = ''; // Clear gallery
    
    filteredImages.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        
        // Ensure clicking on the image opens the modal
        imgElement.addEventListener('click', () => openModal(index));
        
        gallery.appendChild(imgElement);
    });
});


// Display images on page load
displayImages();