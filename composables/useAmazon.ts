const useAmazon = () => {
  //   const isLoggedIn = useState("isLoggedIn");
  const country = useState("Country");
  const { GEOAPIFY_API_KEY } = useRuntimeConfig();

  const loadLocation = async () => {
    // const user = useCookie<any>("user");    // const location: any = user.value ? user.value.location : undefined;
    const location: any = useCookie("location").value;
    const _country = location || (await getCountry());
    return _country;
  };

  const getCountry = async () => {
    const resp = await fetch(
      `https://api.geoapify.com/v1/ipinfo?apiKey=${GEOAPIFY_API_KEY}`
    );
    const userLocationData = await resp.json();
    const _country = userLocationData.country.names.en;
    return _country;

    // await getLocationByUSzipCode();
  };
  const getLocationByUSzipCode = async (postcode: any) => {
    try {
      const geocodingUrl = `https://api.geoapify.com/v1/geocode/search?postcode=${postcode}&filter=countrycode:us&apiKey=${GEOAPIFY_API_KEY}`;
      const result = await fetch(geocodingUrl);
      const featureCollection = await result.json();
      if (!featureCollection.features.length) {
        throw createError({
          statusMessage: "Please enter a valid US zip code",
          statusCode: 404,
        });
      }
      const city = featureCollection.features[0].properties.city;
      const county = featureCollection.features[0].properties.county;

      const _location = city || county;

      return `${_location} ${postcode}`;
    } catch (error) {
      throw error;
    }

    // let numbers = _location.replace(/[^0-9]/g,"");
    // console.log(numbers);
  };
  return { loadLocation, getCountry, getLocationByUSzipCode };
};

export default useAmazon;
