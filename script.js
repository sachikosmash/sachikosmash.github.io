// shiny edges
const grid = document.querySelector(".xo");
document.addEventListener("mousemove", (e) => {
    grid.style.setProperty("--x", e.x + "px");
    grid.style.setProperty("--y", e.y + "px");
});

// tic-tac-toe 

class LimitedArray {
    constructor(maxLength) {
        this.maxLength = maxLength;
        this.items = [];
}

add(content, row, column) {
		// remove item
    if (this.items.length >= this.maxLength) {
        const removedItem = this.items.shift();
      // console.log(removedItem.row, removedItem.column, "emptied");
			this.disappear(removedItem.row, removedItem.column);
    }
    
    // .remaining-life
    // fade out items (mark for removal)
    
    let item;
		
    if (this.items.length === 1) {
			item = this.items.at(0); if (item) this.fadeOut3(item.row, item.column);
    }
    if (this.items.length === 2) {
        item = this.items.at(1); if (item) this.fadeOut3(item.row, item.column);
    }
    
    if (this.items.length === 3) {
			item = this.items.at(0); if (item) this.fadeOut2(item.row, item.column);
        item = this.items.at(2); if (item) this.fadeOut3(item.row, item.column);
    }
    if (this.items.length === 4) {
        item = this.items.at(1); if (item) this.fadeOut2(item.row, item.column);
        item = this.items.at(3); if (item) this.fadeOut3(item.row, item.column);
    }
    
    if (this.items.length === 5) {
			item = this.items.at(0); if (item) this.fadeOut(item.row, item.column);
        item = this.items.at(2); if (item) this.fadeOut2(item.row, item.column);
        item = this.items.at(4); if (item) this.fadeOut3(item.row, item.column);
    }
    if (this.items.length === 6) {
        item = this.items.at(1); if (item) this.fadeOut(item.row, item.column);
        item = this.items.at(3); if (item) this.fadeOut2(item.row, item.column);
        item = this.items.at(5); if (item) this.fadeOut3(item.row, item.column);
    }
    
		// add item
    this.items.push({ content, row, column });
		// console.log(this.items);
}

getItems() { return this.items; }
	size() { return this.items.length; }
	reset() { this.items=[]; }
	
	// disappear(row, column) {
	// 	const el = document.querySelector(`table tr:nth-child(${row}) td:nth-child(${column})`);
	// 	el.innerHTML = "&nbsp;";
	// }
disappear(row, column) {
    const el = document.querySelector(`table tr:nth-child(${row}) td:nth-child(${column})`);
    const content = el.querySelector(":is(b,i)");
    content.classList.add("marked");
      setTimeout(() => { // Set a timeout to allow the CSS transition to take effect
      // Wait for the opacity animation to finish
    content.addEventListener("transitionend", () => {
        // Set the innerHTML to a space after the animation is complete
        el.innerHTML = "&nbsp;";
      }, { once: true }); // listener is removed after it fires 1
      }, 0); // Use a timeout to allow the class addition to take effect
}

	fadeOut(row, column) {
		const el = document.querySelector(`table tr:nth-child(${row}) td:nth-child(${column}) > :is(b,i)`);
		el.classList.add("fade-out");
		// el.classList.remove("fade-out-2");
    el.closest("td").querySelector(".remaining-life").innerHTML = `
    <div class="circle outlined"></div>
    <div class="circle outlined"></div>
    <div class="circle outlined"></div>`;
	}
	fadeOut2(row, column) {
		const el = document.querySelector(`table tr:nth-child(${row}) td:nth-child(${column}) > :is(b,i)`);
		// el.classList.add("fade-out-2");
		el.closest("td").querySelector(".remaining-life").innerHTML = `
    <div class="circle filled"></div>
    <div class="circle outlined"></div>
    <div class="circle outlined"></div>`;
	}
fadeOut3(row, column) {
		const el = document.querySelector(`table tr:nth-child(${row}) td:nth-child(${column}) > :is(b,i)`);
		// el.classList.add("fade-out-2");
		el.closest("td").querySelector(".remaining-life").innerHTML = `
    <div class="circle filled"></div>
    <div class="circle filled"></div>
    <div class="circle outlined"></div>`;
	}
}

const moves = new LimitedArray(6);
const table = document.querySelector("table.xo");

document.querySelectorAll(".xo td").forEach((item, index) => {
	item.addEventListener("click", function(e) {
		const el = e.target.closest("td");
		if (el.querySelector(":is(b,i)")) return;
		
		let player2sTurn = table.classList.contains("player-2s-turn");
		let content = player2sTurn ? "<i>⭘</i>" : "<b>⨯</b>";
    content += `<div class="remaining-life">
    <div class="circle filled"></div>
    <div class="circle filled"></div>
    <div class="circle filled"></div>
    </div>`;
		table.classList.toggle("player-2s-turn");
		
		const row = Math.floor(index / 3) + 1;
		const column = index % 3 + 1;
		moves.add(content, row, column);
		// console.log(row, column, "filled");
		el.innerHTML = content;
	});
	
	// keyboard
	item.addEventListener("keydown", function(e) {
    const el = e.target.closest("td");

    // Handle click actions for space and enter keys
    if (e.key === " " || e.key === "Enter") {
      // if (el.querySelector(":is(b,i)")) {
      //   return;
      // }
    el.click();
    e.preventDefault();
    return;
    }

    // Handle Keyboard Navigation
    const actieEl = document.activeElement;
    const row = actieEl.parentElement.rowIndex + 1;
    const col = actieEl.cellIndex + 1;

    // Function to get the next cell based on row and column adjustments
    const getNextCell = (rowAdjustment, colAdjustment) => {
        const newRow = (row + rowAdjustment - 1 + 3) % 3 + 1; // Wrap around rows
        const newCol = (col + colAdjustment - 1 + 3) % 3 + 1; // Wrap around columns
        return document.querySelector(`.xo tr:nth-child(${newRow}) td:nth-child(${newCol})`);
    };

    const adjustment = directionMap[e.key];
    if (adjustment) {
        getNextCell(adjustment[0], adjustment[1]).focus();
        e.preventDefault();
    }
});

	// mousedown
	// item.addEventListener("mousedown", function(e) {
	// 	const el = e.target.closest("td");
	// 	el.click();
	// });

});

// buttons
document.querySelector(".reset-btn").addEventListener("click", e=>{
	document.querySelectorAll(".xo td").forEach(item=> {
		item.innerHTML = "&nbsp;";
		table.classList.remove("player-2s-turn");
		moves.reset();
    document.querySelector(".not-shown")?.classList.remove("not-shown")
	})
});


// Add click listener to hide image
document.querySelector(".ttt-winner")?.addEventListener("click", function(e) {
    const el = e.target.closest(".img");
    if (el) {  // Check if `el` eists before adding the class
        el.classList.add("not-shown");
    }
});

// Add keyboard accessibility for image
document.querySelector(".ttt-winner")?.addEventListener("keydown", function(e) {
    const el = e.target.closest("img");
    if (el && (e.key === " " || e.key === "Enter")) {  // Ensure `el` exists before calling click
        el.click();
        e.preventDefault();
    }
});
/* checking if clas .ttt-winner is present in the DOM*/
if (document.querySelector('.ttt-winner')) {
    console.log('Class is present in the DOM');
} else {
    console.log('Class is not present in the DOM');
}