$(document).ready(function() {
    
    $('#button').mouseenter(function() {
        $('#button').css('background-color','white');
        $('#button').css('color', '#3d1256');
        $('#button').css('border', 'solid');
        $('#button').css('borderWidth', '1px');
    })
    $('#button').mouseleave(function() {
        $('#button').css('background-color','#3d1256');
        $('#button').css('color', 'white');
        $('#button').css('border', 'none');
    })
    
    $('input[checkListItem]').keyup(function (event) {
        if(event.keycode == 13)  // the enter key code
              {
          $('#button').click();
          return false;
          }
    }); 
    
    $('#button').click(function(){
    var toAdd = $('input[name=checkListItem]').val();
    $('#list').prepend('<li class="item">' + toAdd + '</li>');
    })
    
    
    $(document).on('click', '.item', function() {
        $(this).remove();
    })
    
    $('#list').sortable();
    
    
});


var List = function () {
    var self = this
    
    self.listItems = [];

    self.addToList = function(item) {
        if (self.listItems.length === 0) {
            self.listItems[0] = item;
        } else {
            self.listItems[self.listItems.length] = item;
            
        }
        return this.listItems;
    };
    
};
        
    
    
