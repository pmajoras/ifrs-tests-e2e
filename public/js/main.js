var tableContent = $('#table-users-content');
var noneUsersMessage = $('#none-users-message');

function attachActionButtons() {
  $('#remove-all-btn').on('click', function () {
    $.post('api/users/removeAll', refreshTableContent);
  });

  $('#refresh-btn').on('click', function () {
    $.post('api/users/refresh', refreshTableContent);
  });
}

$(document).ready(function () {
  $.get('api/users', refreshTableContent);
  attachActionButtons();
});

function refreshTableContent(data) {
  tableContent.html('');
  if (data.length > 0) {
    data.forEach(function (item) {
      tableContent.append('<tr class="user-item"><td>' + item.name + '</td> <td>' + item.email + '</td> <td>' + item.phone + '</td> </tr>');
    });
    noneUsersMessage.addClass('hide');
  } else {
    noneUsersMessage.removeClass('hide');
  }
}
