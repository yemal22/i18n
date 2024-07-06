let Explore = {

    result: {},

    nChild: 0,

    exploreRootChildrens: (root) => {
        Explore.nChild = 0;  // Réinitialisation de nChild au début de chaque appel
        return Explore._exploreRootChildrens(root);
    },

    _exploreRootChildrens: (root) => {
        if(root){
            if (root.children) {
                if(root.children.length > 0){
                    root.children.forEach((child) => {
                        console.log("Name: " + child.name + " Type: " + child.type);
                        Explore.nChild++
                        /* On mettra ici la fonction pour récupérer les éléments statiques en fonction de leur type */
                        if (child.children) {
                            Explore._exploreRootChildrens(child);
                        }
                    })
                }
                return Explore.nChild
            }
            return -1
        }
        return -2
    },

    exploreView: (view) => {
        if(view){
            let template = view.template;
            if(template){
                if (template.length > 0) {
                    let root = template[0];
                    let result = Explore.exploreRootChildrens(root);
                    return result
                }
                return -3
            }
            return -4
        }
        return -5
    },

    exploreAllViews: (views) => {
        if(views){
            if(views.length > 0){
                let results = []
                if (views) {
                    views.forEach((view) => {
                        let result = Explore.exploreView(view);
                        results.push(result)
                    });
                }
                return results
            }
            return -6
        }
        return -7
    },

    exploreModuleJson: (json) => {
        if(json){
            if(typeof json === 'object')
                if (json.views) {
                    let results = Explore.exploreAllViews(json.views);
                    return results
                }
            return -8
        }
        return -9
    },
};

export default Explore;
