window.onload = () => {
    const listItems = document.getElementsByClassName('list-item');
    let lastItem = listItems[0];
    lastItem.classList.add("active");
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', event => {
            lastItem.classList.remove('active');
            event.currentTarget.classList.add('active');
            lastItem = event.currentTarget;
        });
    }

    const input = document.getElementById('searchItems');
    const noResults = document.getElementById('no-results');
    input.addEventListener('input', event => {
        let j = 0;
        for (var i = 0; i < listItems.length; i++) {
            const currentItem = listItems[i].getElementsByTagName('a')[0].innerHTML;
            if (event.target.value.length >= 0) {
                listItems[i].style.display = '';
            }
            if (!currentItem.toLowerCase().includes(event.target.value.toLowerCase())) {
                listItems[i].style.display = 'none';
                j++;
            }
            if(j === listItems.length){
                noResults.style.display = '';
            } else{
                noResults.style.display = 'none';
            }
        }
    });
}
