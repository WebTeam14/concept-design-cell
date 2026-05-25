- [ ] Explore where projects fields are used (ProjectDetail, other pages/components)
- [ ] Decide/confirm canonical keys in projects.json: LOCATION, CATEGORY, YEAR, PLOT AREA, CLIENT
- [ ] Update src/data/projects.ts types + mapping to include plotArea and client (and keep existing fields backward-compatible)
- [ ] Update src/pages/ProjectDetail.tsx sidebar to show Plot Area and Client
- [ ] Update src/data/projects.json: ensure every project has plot area + client; preserve current structure and add missing fields
- [ ] Run typecheck/build (if available) and verify UI renders without undefined

