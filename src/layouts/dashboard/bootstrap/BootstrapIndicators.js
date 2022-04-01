import { Card, CardHeader, Box, Grid, Typography } from '@mui/material';

export default function BootstrapNavs() {
  return (
    <Card className="typo" style={{ border: 'none', boxShadow: 'none' }}>
      <CardHeader title="Navs" className="title" />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <h2 id="nav-tabs">Tabs</h2>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#profile">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </li>
            </ul>
            <div id="myTabContent" className="tab-content">
              <div className="tab-pane fade show active" id="home">
                <p>
                  Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                  stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg
                  carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                  Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat
                  salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher
                  voluptate nisi qui.
                </p>
              </div>
              <div className="tab-pane fade" id="profile">
                <p>
                  Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee
                  squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes
                  anderson artisan four loko farm-to-table craft beer twee. Qui photo booth
                  letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl
                  cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus
                  mollit.
                </p>
              </div>
              <div className="tab-pane fade" id="dropdown1">
                <p>
                  Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's
                  organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag
                  gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy
                  salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify
                  squid 8-bit cred pitchfork.
                </p>
              </div>
              <div className="tab-pane fade" id="dropdown2">
                <p>
                  Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before
                  they sold out master cleanse gluten-free squid scenester freegan cosby sweater.
                  Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park
                  Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                  farm-to-table VHS viral locavore cosby sweater.
                </p>
              </div>
            </div>
          </Box>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <h2 id="nav-tabs">Breadcrumbs</h2>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Home</li>
            </ol>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active">Library</li>
            </ol>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Library</a>
              </li>
              <li className="breadcrumb-item active">Data</li>
            </ol>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <h2 id="nav-tabs">Pills</h2>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Active
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </Box>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Active
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </Box>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <h2 id="nav-tabs">Pagination</h2>
            <div>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="#">
                    &laquo;
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    &raquo;
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="pagination pagination-lg">
                <li className="page-item disabled">
                  <a className="page-link" href="#">
                    &laquo;
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    &raquo;
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="pagination pagination-sm">
                <li className="page-item disabled">
                  <a className="page-link" href="#">
                    &laquo;
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    &raquo;
                  </a>
                </li>
              </ul>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
