const getData = async function () {
  try {
    const res = await fetch('./data.json');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error)
  }
};