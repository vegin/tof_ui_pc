import ThemeDefault from './themeDefault';
import ThemeRed from './themeRed';

var Theme = {
    themes:{
        default:ThemeDefault,
        red:ThemeRed
    },
    set:function(theme){
        Object.assign(this,this.themes[theme || 'default']);
    }
};
Theme.set('red');
export default Theme;