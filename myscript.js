function setup() {
	createCanvas(windowWidth, windowHeight);
	fill(255);
	frameRate(random(1, 5));
}

function draw() {
	for (let i = 0; i < 10; i++) {
		textSize(32);
		text('Do you really think you’re free?', random(0, windowWidth), random(0, windowHeight));
        fill(0, 102, 153);
        text('Do you really think you’re free?', random(0, windowWidth), random(0, windowHeight));
        fill(0, 102, 153);
        text('Do you really think you’re free?', random(0, windowWidth), random(0, windowHeight));
	}
	for (let i = 0; i < 100; i++) {
		fill(255);
		textSize(100);
		textAlign(CENTER, CENTER);
		text('Your mind is not your own.', windowWidth / 2, windowHeight / 2);
	}
}
