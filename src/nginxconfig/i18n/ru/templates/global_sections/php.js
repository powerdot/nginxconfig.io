/*
Copyright 2021 DigitalOcean

This code is licensed under the MIT License.
You may obtain a copy of the License at
https://github.com/digitalocean/nginxconfig.io/blob/master/LICENSE or https://mit-license.org/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions :

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

import common from '../../common';

export default {
    phpServer: `${common.php} сервер`,
    phpMustBeEnabledOnOneSite: `${common.php} должен быть включен как минимум на одном сайте, чтобы сконфигурировать глобальные настройки ${common.php}.`,
    phpBackupServer: `${common.php} бекап сервер`,
    tcp: 'TCP',
    hhvmSocket: 'HHVM сокет',
    php5Socket: '5.x сокет',
    php70Socket: '7.0 сокет',
    php71Socket: '7.1 сокет',
    php72Socket: '7.2 сокет',
    php73Socket: '7.3 сокет',
    php74Socket: '7.4 сокет',
    php80Socket: '8.0 сокет',
    phpSocket: 'PHP сокет',
    custom: 'Другой',
    disabled: 'Выключено',
};
