class Tower {
constructor() {
    var options = {
        isStatic: true
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(200, 200, 50, 50, options);
    World.add(world, this.body); 
}
display() {
    var pos = this.body.position;
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);

}







}