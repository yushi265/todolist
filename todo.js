(()=>{

//定数、変数
const $doc = document;
let listNumber = 1; 
const btnClass = 'btn btn-primary list-btn ml-4';//ボタンのクラス
const listClass = 'list-group-item';//リストのクラス

//タスク削除関数
const getBtn = ()=>{
    let index = 0;
    while(index < listNumber){
        $doc.getElementById('list-'+index).querySelector('[data-btn="'+index+ '"]').addEventListener('click',(e)=>{
            // $doc.querySelector('id = "list-'+index-1+'"').classList.add('done');
            $this = e.target;
            $this.style.display = 'none';
            const listName = $this.dataset.btn;
            $doc.getElementById('list-'+listName).classList.add('done');
            
        })
        
        index++;
    }
};

//タスク作成関数
const makeTask = ($inputContent) =>{

    //リストタグ追加
    const newBtn = $doc.createElement('button');//ボタン要素作成
    newBtn.className = btnClass;//newBtnクラス追加
    newBtn.innerHTML = '削除';//newBtn文章追加
    newBtn.dataset.btn = listNumber;//data-btn属性追加

    const newTask = $doc.createTextNode($inputContent);//タスク文章作成

    const newList = $doc.createElement('li');//リスト要素作成
    newList.id = 'list-'+ listNumber;//button-id追加
    newList.className = listClass;//list-class追加
    newList.appendChild(newTask);//newTaskをliへ
    newList.appendChild(newBtn);//newBtnをliへ
    

    const listDiv = $doc.getElementById('todo-list');
    listDiv.appendChild(newList);//リストへ追加

    listNumber++;

};

//タスク追加関数
const addTask = () =>{

    $doc.getElementById('new-task-button').addEventListener('click',(e)=>{
        const $inputContent = $doc.getElementById('inputTask').value;
        if($inputContent === ""){
            window.alert('タスクを入力してください');
        }else if($inputContent.length > 20){
            window.alert('20文字以内で入力してください');
        }else{
            makeTask($inputContent);
        }
        $doc.getElementById('inputTask').value = '';  //フォームを空にする
        getBtn();
    });
};

addTask();
getBtn();

})();
