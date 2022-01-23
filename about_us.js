<script>
      function buy() {
        let name = prompt("What is your name?");
        let emoji = prompt("What is your favorite emoji?");
        let website = prompt("How did you find our website? Do you like it?");

        alert(
          "Thank you, " +
            name +
            " for visiting our page and giving us feedback! The Emoti-Quote team really appreciate it! " +
            emoji
        );
      }

      let buyButton = document.querySelector(".buy-button");
      buyButton.addEventListener("click", buy);
    </script>