const playButton = document.getElementById('playbutton');
const list = document.getElementById('list');

    playButton.addEventListener('click', () => {
        fetch('package.json')
            .then(response => response.json())
            .then(data => {
                list.innerHTML = ''; 

                data.forEach(rule => {
                    const listItem = document.createElement('li');
                    listItem.textContent = rule;
                    list.appendChild(listItem);
                });
            })
    });

  
 