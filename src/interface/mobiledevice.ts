import { Observable } from 'rxjs';

export interface MobileService {
    getMobileDevice(data?: MobileListRequest): Observable<DeviceListAll>;
    create(data: CreateRequest): Observable<DeviceDatas>;
    update(data: UpdateRequest): Observable<DeviceDatas>;
    delete(data: DeviceById): Observable<DeviceSuccessMessage>;
    findById(data: DeviceById): Observable<DeviceDatas>;
}

export interface MobileListRequest {
  id ?:string;
}

export interface DeviceListAll {
  data: Array<DeviceDatas>;
}

export interface CreateRequest {
  data: DataCreate;
}

export interface DeviceDatas {
  id: number;
  name: string;
  device_id: string;
  os_version: string;
  customer_name:string;

}

export interface DataCreate {
  name: string;
  os_version: string;
  customer_name:string;
  device_id:string;
}
export interface DeviceSuccessMessage {
  message: string;
}
export interface UpdateRequest {
  id:number;
  data: DataCreate;
}

export interface DeviceById {
  id: number;
}
