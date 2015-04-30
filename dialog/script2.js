function Dialog(id, header, content) {
    this.id = id;
    this.header = header;
    this.content = content;
    this.ref = null;
    this.isMask = false;
    this.init();
    
}

Dialog.prototype.init = function() {
	var wrap = $('<div id="' + this.id + '" class="dialog"></div>');
	var headerWrap = $('<div class="header">' + this.header + '<div class="close iconfont">&#xe61a;</div></div>');
	var contentWrap = $('<div class="content"></div>');
	contentWrap.append(this.content);

	wrap.append(headerWrap).append(contentWrap);

	this.ref = wrap;
    
    $('body').append(this.ref);
    var _dialog = this;
    
    $('.dialog .close').on('click', function(e) {
        _dialog.hide();
    });

    $(document).on('click', function(e) {
        var target = e.target;
        if($(target).parents('.dialog').length > 0) return false;
        _dialog.hide();
    });

};  

Dialog.prototype.show = function() {
    this.ref.show();
    this.mask();
    
};

Dialog.prototype.hide = function() {
	this.ref.hide();
	this.mask();
};

Dialog.prototype.mask = function() {
	var mask = $('<div class="lock"></div>');
	mask.css({
    "position": "absolute",
    "z-index": "998",
    "width": "100%",
    "height": "100%",
    "left": "0",
    "top": "0",
    "background-color": "rgba(0, 0, 0, 0.5)"
});
	this.isMask =! this.isMask;
    if(this.isMask) {
        mask.remove();
    } else{$('body').append(mask);}
};