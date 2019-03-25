$(function() {
  $(document).ready(function() {
    var max_fields = 10;
    var rowCnt = 1;
    var rowCnt2 = 1;
    var htmlclone =
      '<div class="row_clonned">' + $(".row__start").html() + "</div>";
    $(".row__start").html(htmlclone);
    $(".row__start").after('<div class="row_clone"></div>');
    $("#field_second").chained("#field_first");

    $(document).on("click", ".btn-add", function(e) {
      e.preventDefault();

      if (rowCnt < max_fields) {
        rowCnt++;
        $(".row_clone").append(htmlclone);
        $(".btn-remove").removeClass("d-none");
        $(".filter_first:last").attr("id", "field_first" + rowCnt2);
        $(".filter_second:last").attr("id", "field_second" + rowCnt2);
        $("#field_second" + rowCnt2).chained("#field_first" + rowCnt2);
        rowCnt2++;
      } else {
        alert("Максимальное количество строк - 10");
      }
    });

    $("form")
      .on("change", "select", function() {
        val_input = $(this)
          .parent()
          .next("div")
          .find("input")
          .val("");

        $(val_input).on("change keyup input click", function() {
          val_select1 = $(this)
            .parent()
            .parent()
            .prevAll("div")
            .find("select")
            .val();
          if (val_select1.indexOf("first")) {
            if (this.value.match(/[^0-9]/g)) {
              this.value = this.value.replace(/[^0-9]/g, "");
            }
          }
        });
      })

      .on("click", ".btn-remove", function(e) {
        if (rowCnt > 2) {
          $(this)
            .parents(".row_clonned")
            .remove();
          rowCnt--;
        } else {
          $(this)
            .parents(".row_clonned")
            .remove();
          rowCnt--;
          $(".btn-remove").addClass("d-none");
        }

        e.preventDefault();
        return false;
      })

      .on("click", ".btn-outline-secondary", function(e) {
        $(".row_clone").empty();
        $(".row__start").empty();
        $("form").trigger("reset");
        $(".btn-remove").addClass("d-none");
        $(".row_clone").append(htmlclone);
        rowCnt = 1;

        e.preventDefault();
        return false;
      });

    $("form").submit(function(event) {
      console.log($("form").serializeArray());
      event.preventDefault();
    });
  });
});
