import { type HomeType } from './Home';

type HomeApiType = {
  category?: string,
  icon_url: string,
  id: string,
  url: string,
  value: string,
};

class HomeService {
  static mapApiToValues(home: HomeApiType): HomeType {
    return {
      ...home,
      category: home.category || '',
    };
  }

  // @FIXME implement or remove
  static mapValuesToApi() {}
}

export default HomeService;
