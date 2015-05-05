function Dialog(id, head, content) {
    this.head = head;
    this.content = content;
    this.id = id;
    this.ref = null;
    this.init();
}

Dialog.prototype.init = function() {
    var wrap = $('<div class="dialog" id="' + this.id + '"></div>');
    var head = $('<div class="header">' + this.head +'<div class="close iconfont">&#xe61a;</div></div>');
    var content = $('<div class="content">'+ this.content +'</div>');
    // 创建遮罩
    var mask = $('<div></div>');
    
    wrap.append(head).append(content);
    this.mask = mask;
    
    this.ref = wrap;
    // 插入对话框和遮罩
    $('body').append(wrap).append(mask);
    var me = this;
    $('.header .close').on('click', function() {
        me.off();
    })
    $(document).on('click', function(e) {
        var target = e.target;
        if($(target).parents('.dialog').length > 0) {
            return false;
        }
        me.off();
    });
};

Dialog.prototype.show = function() {
    this.ref.css('display', 'block');
    this.maskSwitch();
};

Dialog.prototype.off = function() {
    this.ref.css('display', 'none');
    this.maskSwitch();
};

Dialog.prototype.maskSwitch = function() {
    if(this.ref.attr('style') == "display: block;") {
        this.mask.addClass('lock');
    }
    if(this.ref.attr('style') == "display: none;") {
        this.mask.removeClass('lock');
    }
};