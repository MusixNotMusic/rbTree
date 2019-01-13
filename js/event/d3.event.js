function zoomed() {
  d3Transform = d3.event.transform;
  ctx.save();
  ctx.clearRect(0, 0, width, height);
  ctx.translate(d3.event.transform.x, d3.event.transform.y);
  ctx.scale(d3.event.transform.k, d3.event.transform.k);
  render();
  ctx.restore();
}

