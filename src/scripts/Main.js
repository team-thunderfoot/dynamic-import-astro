// import Test from './../scripts/modules/Loadcontent.js'
class Main{
    constructor(){
        this.init()
    }
    init(){
        console.log('MainClass init')

        var loadcontent;
        document.querySelector('.trigger').addEventListener('click',(e)=>{
        	e.preventDefault();
        	if(typeof loadcontent == undefined || loadcontent == null){
        		console.log('dentro')
        		import('./../scripts/modules/Loadcontent.js').then((x)=>{
        			console.log(x)
        			loadcontent = new x.default()
        		}).catch(()=>{ console.log('error') })
        	}
        })


    }
}
export default Main;