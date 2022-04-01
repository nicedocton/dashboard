import { Card, CardHeader, Box, Grid } from '@mui/material';

export default function BootstrapTypography() {
  return (
    <Card className="typo" style={{ border: 'none', boxShadow: 'none' }}>
      <CardHeader title="Typography" className="title" />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <h3>
              Heading
              <small className="text-muted">with muted text</small>
            </h3>
            <p className="lead">
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <h2>Example body text</h2>
            <p>
              Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id
              dolor id nibh ultricies vehicula.
            </p>
            <p>
              <small>This line of text is meant to be treated as fine print.</small>
            </p>
            <p>
              The following is <strong>rendered as bold text</strong>.
            </p>
            <p>
              The following is <em>rendered as italicized text</em>.
            </p>
            <p>
              An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.
            </p>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <h2>Emphasis classes</h2>
            <p className="text-muted">
              Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
            </p>
            <p className="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            <p className="text-secondary">
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </p>
            <p className="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
            <p className="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p className="text-success">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            <p className="text-info">
              Maecenas sed diam eget risus varius blandit sit amet non magna.
            </p>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <h2 id="type-blockquotes">Blockquotes</h2>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <figure>
              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                  ante.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                  ante.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <figure>
              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                  ante.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
