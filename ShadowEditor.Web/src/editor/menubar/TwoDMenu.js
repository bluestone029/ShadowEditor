import UI from '../../ui/UI';
import Button from '../../visual/component/Button';
import Label from '../../visual/component/Label';
import Panel from '../../visual/component/Panel';
import HorizontalLine from '../../visual/component/HorizontalLine';
import BarChart from '../../visual/component/BarChart';

/**
 * 二维菜单
 * @author tengge / https://github.com/tengge1
 * @param {*} options 
 */
function TwoDMenu(options) {
    UI.Control.call(this, options);
    this.app = options.app;
}

TwoDMenu.prototype = Object.create(UI.Control.prototype);
TwoDMenu.prototype.constructor = TwoDMenu;

TwoDMenu.prototype.render = function () {
    var container = UI.create({
        xtype: 'div',
        parent: this.parent,
        cls: 'menu',
        children: [{
            xtype: 'div',
            cls: 'title',
            html: L_TWO_D
        }, {
            xtype: 'div',
            cls: 'options',
            children: [{
                xtype: 'div',
                cls: 'option',
                html: L_BUTTON,
                onClick: this.addButton.bind(this),
            }, {
                xtype: 'div',
                cls: 'option',
                html: L_LABEL,
                onClick: this.addLabel.bind(this),
            }, {
                xtype: 'div',
                cls: 'option',
                html: L_PANEL,
                onClick: this.addPanel.bind(this),
            }, {
                xtype: 'div',
                cls: 'option',
                html: L_HORIZONTAL_LINE,
                onClick: this.addHorizontalLine.bind(this),
            }, {
                xtype: 'div',
                cls: 'option',
                html: L_BAR_CHART,
                onClick: this.addBarChart.bind(this),
            }]
        }]
    });

    container.render();
};

// ------------------------------ 按钮 --------------------------------

TwoDMenu.prototype.addButton = function () {
    var visual = this.app.editor.visual;
    var svg = this.app.editor.svg;

    visual.add(new Button());
    visual.render(svg);
};

// ---------------------------- 标签 -----------------------------------

TwoDMenu.prototype.addLabel = function () {
    var visual = this.app.editor.visual;
    var svg = this.app.editor.svg;

    visual.add(new Label());
    visual.render(svg);
};

// ---------------------------- 面板 ------------------------------------

TwoDMenu.prototype.addPanel = function () {
    var visual = this.app.editor.visual;
    var svg = this.app.editor.svg;

    visual.add(new Panel());
    visual.render(svg);
};

// --------------------------- 水平线 -------------------------------------

TwoDMenu.prototype.addHorizontalLine = function () {
    var visual = this.app.editor.visual;
    var svg = this.app.editor.svg;

    visual.add(new HorizontalLine());
    visual.render(svg);
};

// ---------------------------- 条形图 -------------------------------------

TwoDMenu.prototype.addBarChart = function () {
    var visual = this.app.editor.visual;
    var svg = this.app.editor.svg;

    visual.add(new BarChart());
    visual.render(svg);
};

export default TwoDMenu;