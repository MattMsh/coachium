import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id'},
  { field: 'home'},
  { field: 'visitor'},
  { field: 'pointsHome'},
  { field: 'pointsVisitor'},
  { field: 'judge'},
]

const matches = [{
  "id": 1,
  "home": "Fatz",
  "visitor": "Devbug",
  "pointsHome": 12,
  "pointsVisitor": 3,
  "judge": "Jacobo"
}, {
  "id": 2,
  "home": "Blogspan",
  "visitor": "Nlounge",
  "pointsHome": 29,
  "pointsVisitor": 31,
  "judge": "Hermine"
}, {
  "id": 3,
  "home": "Brainsphere",
  "visitor": "Linkbuzz",
  "pointsHome": 32,
  "pointsVisitor": 10,
  "judge": "Derrek"
}, {
  "id": 4,
  "home": "Skyndu",
  "visitor": "Eamia",
  "pointsHome": 13,
  "pointsVisitor": 40,
  "judge": "Angelita"
}, {
  "id": 5,
  "home": "Youbridge",
  "visitor": "Flipbug",
  "pointsHome": 15,
  "pointsVisitor": 2,
  "judge": "Marigold"
}, {
  "id": 6,
  "home": "Jamia",
  "visitor": "Katz",
  "pointsHome": 7,
  "pointsVisitor": 18,
  "judge": "Durand"
}, {
  "id": 7,
  "home": "Devshare",
  "visitor": "Nlounge",
  "pointsHome": 13,
  "pointsVisitor": 42,
  "judge": "Brennen"
}, {
  "id": 8,
  "home": "Kwideo",
  "visitor": "Edgeblab",
  "pointsHome": 32,
  "pointsVisitor": 24,
  "judge": "Panchito"
}, {
  "id": 9,
  "home": "Twitterlist",
  "visitor": "Abata",
  "pointsHome": 6,
  "pointsVisitor": 32,
  "judge": "Ray"
}, {
  "id": 10,
  "home": "Fivechat",
  "visitor": "Trudoo",
  "pointsHome": 12,
  "pointsVisitor": 37,
  "judge": "Rayshell"
}]

const Matches = () => <div style={{ height: '400px', width: '100%' }}>
          <DataGrid
            rows={matches}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            />
        </div>

export default Matches;