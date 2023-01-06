import app from './app';

const port = 4000;

app.listen(port, (): void => {
  console.log(`Listening on port ${port}`);
});
