/**
 * Remove as opções do cabeçalho de acordo objeto toolbarOptions
 * @param toolbar - Objeto do cabeçalho
 * @param options - Objeto que será removido
 */
export function handleToolbarOptions(toolbar: any, options: any) {
    let tabs: any[] = toolbar.getTabs();
    let blocked = [];
    for (const key in options) {
        if (!options[key]) {
            blocked.push(key.charAt(0).toUpperCase() + key.slice(1));
        }
    }

    toolbar.getTabs = function () {
        tabs = tabs.filter(tab => {
            
            return !blocked.includes(tab.title);
        });
        return tabs;
    };
}