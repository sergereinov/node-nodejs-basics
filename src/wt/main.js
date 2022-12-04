import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const performCalculations = async () => {
    const workers = Array.from(
        { length: cpus().length },
        (_, i) => new Promise((resolve) => {
            const worker = new Worker(new URL('./worker.js', import.meta.url), {
                workerData: i + 10,
            });
            worker.on('message', msg => {
                resolve({ id: i, status: 'resolved', data: msg });
            });
            worker.on('error', () => {
                resolve({ id: i, status: 'error', data: null });
            });
        })
    );

    Promise.all(workers).then(results => {
        results.sort((a, b) => a.id - b.id);
        console.log(results.map(r => {
            return { status: r.status, data: r.data, };
        }));
    });
};

await performCalculations();
