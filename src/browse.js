let realInstance = {

    result: {},

    n: 0,

    browseRootChildrens: (root) => {
        let childrens = root.children
        if (childrens) {
            childrens.map((child) => {
                console.log("Name: " + child.name + " " + "Type: " + child.type)
                /* On mettra ici la fonction pour récupérer les éléments statique en fonction de leur type */
                if (child.children !== undefined) {
                    realInstance.browseRootChildrens(child)
                } 
            })
        }  
    },

    browseModuleJson: (jsonFile) => {
        let json = JSON.parse(jsonFile)
        let roots = []
        const allModules = json.views

        if (allModules) {
            allModules.map((module) => {
                let template = module.template;
                if (template && template.length > 0) {
                    let root = template[0];
                    roots.push(root);
                }
            });
        }
        
        roots.map((root) => {
            realInstance.browseRootChildrens(root)
        })
    }
}

const Browse = {
    getInstance: ()=>{
	    return realInstance;
    }
}

export default Browse;
