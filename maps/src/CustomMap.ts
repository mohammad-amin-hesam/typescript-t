/**
 * Instructions to every other class
 * on how they can be an argument to `addMarker`
 */
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  private el: Element | null;

  constructor(divId: string) {
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

    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat, lng },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap);
    });
  }
}
