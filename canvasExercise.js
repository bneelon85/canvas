var canvas = document.querySelector('canvas')
var context = canvas.getContext('2d')

// Rect beside Rect
// context.fillStyle = 'black'
// context.fillRect(50, 50, 100, 200)

// context.fillStyle = 'red'
// context.fillRect(300, 50, 100, 200)

// Rect in Rect
// context.fillStyle = 'black'
// context.fillRect(50, 50, 300, 600)

// context.fillStyle = 'red'
// context.fillRect(75, 75, 100, 200)

// Circle
context.beginPath()
context.fillStyle = 'blue'
context.ellipse(300, 300, 200, 200, 0, 0, Math.PI * 2)
context.fill()
context.beginPath()
context.fillStyle = 'white'
context.ellipse(300, 300, 150, 150, 0, 0, Math.PI * 2)
context.fill()
context.beginPath()
context.fillStyle = 'yellow'
context.ellipse(300, 300, 140, 140, 0, 0, Math.PI * 2)
context.fill()
context.beginPath()
context.fillStyle = 'white'
context.ellipse(300, 300, 60, 60, 0, 0, Math.PI * 2)
context.fill()
context.beginPath()
context.fillStyle = 'red'
context.ellipse(300, 300, 50, 50, 0, 0, Math.PI * 2)
context.fill()
