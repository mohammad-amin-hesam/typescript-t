/**
 * Instructions to every other class
 * on how they can be an argument to `addMarker`
 */
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  public googleMap: google.maps.Map;
  private el: Element | null;

  constructor(divId: string = 'map') {
    this.el = document.getElementById(divId);
    this.googleMap = new google.maps.Map(this.el, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const { lat, lng } = mappable.location;

    new google.maps.Marker({
      map: this.googleMap,
      position: { lat, lng },
    });
  }
}
