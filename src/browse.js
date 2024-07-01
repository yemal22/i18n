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
        
        allModules.map((module) => {
            let root = module.template[0]
            roots.push(root)
        })
        
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
