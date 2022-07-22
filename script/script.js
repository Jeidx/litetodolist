window.addEventListener('DOMContentLoaded',() => {
    
    const wrapContent = document.querySelector('.workspace'),
        input = wrapContent.querySelector('.input'),
        btnAccept = wrapContent.querySelector('.btn'),
        areaFordata = wrapContent.querySelector('.text-area');

        function getValueInput(){
            let valueOfInp = input.value;
            return valueOfInp;
        }
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                createrElements(e);
            }
        });
        btnAccept.addEventListener('click', createrElements);
        
        function createrElements(e){
            e.preventDefault();
            let valueOfinp = (getValueInput());
            if(valueOfinp.length > 0){
                let newItem =  document.createElement('li');
                newItem.classList.add('text-area_item');
                newItem.innerHTML = `
                <input value="${valueOfinp}" type="text" class="text-area_item__text"/>
                <button class="text-area_item__succ btn btn-success">OK</button>
                <button class="text-area_item__remove btn btn-danger">X</button>

                <span class="oko"></span>
            `;
            areaFordata.prepend(newItem);
            }else{
                alert('enter some');
            }
            input.value = '';
        }
        areaFordata.addEventListener('click',(e) => {
            e.preventDefault();
            if(e.target && e.target.classList.contains('text-area_item__remove')){
                e.target.parentElement.remove();
            }
        });
        areaFordata.addEventListener('click',(e) => {
            e.preventDefault();
            if(e.target && e.target.classList.contains('text-area_item__succ')){
                
                e.target.parentElement.querySelector('.oko').classList.toggle('active');
            }
        });
});
//litetodolist