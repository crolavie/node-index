let News = require('./01、一个新闻模块的例子');
let inheritPrototype = require('./inheritPrototype');

// 容器类构造函数
let Container = function (id, parent) {
    // 构造函数继承父类
    News.call(this);
    // 模块id
    this.id = id;
    // 模块的父容器
    this.parent = parent;
    // 构建方法
    this.init();
};
// 寄生式继承父类原型方法
inheritPrototype(Container, News);
// 构建方法
Container.prototype.init = function () {
    this.element = document.createElement('ul');
    this.element.id = this.id;
    this.element.className = 'new-container'
};

// 添加子元素
Container.prototype.add = function (child) {
    // 在子元素容器中插入子元素
    this.children.push(child);
    // 插入当前组件元素树中
    this.element.appendChild(child.getElement());
    return this;
};
// 获取子元素的方法
Container.prototype.getElement = function () {
    return this.element;
};

// 显示方法
Container.prototype.show = function () {
    this.parent.appendChild(this.element);
};

/**/