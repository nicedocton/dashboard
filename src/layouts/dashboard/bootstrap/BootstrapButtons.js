import { Card, CardHeader, Box, Grid } from '@mui/material';

export default function BootstrapButtons() {
  return (
    <Card className="typo" style={{ border: 'none', boxShadow: 'none' }}>
      <CardHeader title="Buttons" className="title" />
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <button type="button" className="btn btn-primary">
              Primary
            </button>
            <button type="button" className="btn btn-secondary">
              Secondary
            </button>
            <button type="button" className="btn btn-success">
              Success
            </button>
            <button type="button" className="btn btn-info">
              Info
            </button>
            <button type="button" className="btn btn-warning">
              Warning
            </button>
            <button type="button" className="btn btn-danger">
              Danger
            </button>
            <button type="button" className="btn btn-light">
              Light
            </button>
            <button type="button" className="btn btn-dark">
              Dark
            </button>
            <button type="button" className="btn btn-link">
              Link
            </button>
          </Box>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <button type="button" className="btn btn-primary disabled">
              Primary
            </button>
            <button type="button" className="btn btn-secondary disabled">
              Secondary
            </button>
            <button type="button" className="btn btn-success disabled">
              Success
            </button>
            <button type="button" className="btn btn-info disabled">
              Info
            </button>
            <button type="button" className="btn btn-warning disabled">
              Warning
            </button>
            <button type="button" className="btn btn-danger disabled">
              Danger
            </button>
            <button type="button" className="btn btn-light disabled">
              Light
            </button>
            <button type="button" className="btn btn-dark disabled">
              Dark
            </button>
            <button type="button" className="btn btn-link disabled">
              Link
            </button>
          </Box>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <button type="button" className="btn btn-outline-primary">
              Primary
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Secondary
            </button>
            <button type="button" className="btn btn-outline-success">
              Success
            </button>
            <button type="button" className="btn btn-outline-info">
              Info
            </button>
            <button type="button" className="btn btn-outline-warning">
              Warning
            </button>
            <button type="button" className="btn btn-outline-danger">
              Danger
            </button>
            <button type="button" className="btn btn-outline-light">
              Light
            </button>
            <button type="button" className="btn btn-outline-dark">
              Dark
            </button>
          </Box>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
              <button type="button" className="btn btn-primary">
                Primary
              </button>
              <div className="btn-group" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                </div>
              </div>
            </div>
            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
              <button type="button" className="btn btn-success">
                Success
              </button>
              <div className="btn-group" role="group">
                <button
                  id="btnGroupDrop2"
                  type="button"
                  className="btn btn-success dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop2">
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                </div>
              </div>
            </div>

            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
              <button type="button" className="btn btn-info">
                Info
              </button>
              <div className="btn-group" role="group">
                <button
                  id="btnGroupDrop3"
                  type="button"
                  className="btn btn-info dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop3">
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                </div>
              </div>
            </div>

            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
              <button type="button" className="btn btn-danger">
                Danger
              </button>
              <div className="btn-group" role="group">
                <button
                  id="btnGroupDrop4"
                  type="button"
                  className="btn btn-danger dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop4">
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                </div>
              </div>
            </div>
          </Box>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <button type="button" className="btn btn-primary btn-lg">
              Large button
            </button>
            <button type="button" className="btn btn-primary">
              Default button
            </button>
            <button type="button" className="btn btn-primary btn-sm">
              Small button
            </button>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <button className="btn btn-lg btn-primary" type="button">
              Block button
            </button>
            <button className="btn btn-lg btn-primary" type="button">
              Block button
            </button>
          </Box>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck1"
                checked=""
                autoComplete="off"
              />
              <label className="btn btn-primary" htmlFor="btncheck1">
                Checkbox 1
              </label>
              <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
              <label className="btn btn-primary" htmlFor="btncheck2">
                Checkbox 2
              </label>
              <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
              <label className="btn btn-primary" htmlFor="btncheck3">
                Checkbox 3
              </label>
            </div>
          </Box>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
                checked=""
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio1">
                Radio 1
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
                checked=""
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio2">
                Radio 2
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio3"
                autoComplete="off"
                checked=""
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio3">
                Radio 3
              </label>
            </div>
          </Box>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <div className="btn-group-vertical">
              <button type="button" className="btn btn-primary">
                Button
              </button>
              <button type="button" className="btn btn-primary">
                Button
              </button>
              <button type="button" className="btn btn-primary">
                Button
              </button>
              <button type="button" className="btn btn-primary">
                Button
              </button>
              <button type="button" className="btn btn-primary">
                Button
              </button>
              <button type="button" className="btn btn-primary">
                Button
              </button>
            </div>
          </Box>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-secondary">
                Left
              </button>
              <button type="button" className="btn btn-secondary">
                Middle
              </button>
              <button type="button" className="btn btn-secondary">
                Right
              </button>
            </div>
          </Box>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
              <div className="btn-group me-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-secondary">
                  1
                </button>
                <button type="button" className="btn btn-secondary">
                  2
                </button>
                <button type="button" className="btn btn-secondary">
                  3
                </button>
                <button type="button" className="btn btn-secondary">
                  4
                </button>
              </div>
              <div className="btn-group me-2" role="group" aria-label="Second group">
                <button type="button" className="btn btn-secondary">
                  5
                </button>
                <button type="button" className="btn btn-secondary">
                  6
                </button>
                <button type="button" className="btn btn-secondary">
                  7
                </button>
              </div>
              <div className="btn-group" role="group" aria-label="Third group">
                <button type="button" className="btn btn-secondary">
                  8
                </button>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
