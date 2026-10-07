
class FastQueue {
    constructor() {
        this.queue = [];
        this.headIndex = 0;
    }

    enqueue(vehicle) {
        this.queue.push(vehicle);
    }

    dequeue() {
        if (this.headIndex >= this.queue.length) {
            return null; 
        }
        
        const vehicle = this.queue[this.headIndex];
        
        this.queue[this.headIndex] = null; 
        
        this.headIndex++;
        
        return vehicle;
    }

    getWaitingCount() {
        return this.queue.length - this.headIndex;
    }
}

console.log('--- KHỞI TẠO HÀNG ĐỢI TRẠM SẠC ---');
const chargingQueue = new FastQueue();

chargingQueue.enqueue('29A-111.11');
chargingQueue.enqueue('30E-222.22');
chargingQueue.enqueue('51K-333.33');
chargingQueue.enqueue('60C-444.44');

console.log(`Số xe đang chờ hiện tại: ${chargingQueue.getWaitingCount()} xe`);

const firstVehicle = chargingQueue.dequeue();
console.log(`[ĐIỀU PHỐI] Đã gọi xe ${firstVehicle} vào sạc.`);

const secondVehicle = chargingQueue.dequeue();
console.log(`[ĐIỀU PHỐI] Đã gọi xe ${secondVehicle} vào sạc.`);

console.log(`Số xe đang chờ còn lại: ${chargingQueue.getWaitingCount()} xe`);
