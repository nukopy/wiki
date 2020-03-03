---
title: "Library"
metaTitle: "Library | Python"
metaDescription: "Python Library tips."
---

標準ライブラリ，3rd party 製ライブラリなどに関する tips．

## datetime

日付，時間を扱うための Python 標準モジュール datetime に関する tips．

### datetime における型

datetime における日付，時刻の計算では，主に 4 種類の型が使われる．`datetime.datetime` のように表すが，ここでは単に `datetime` と省略する．

- `date`：日付のみを表す型
- `time`；時刻のみを表す型
- `datetime`：日付と時刻を表す型
- `timedelta`：datetime の差を表す型．**`datetime` 型を元に計算するため，`date` 型，`time` 型の場合，一度 `datetime` 型に変換してから計算しないとエラーになる**．

例）`time` 型と `timedelta` 型で計算しようとした場合に出るエラーメッセージ

```txt
TypeError: unsupported operand type(s) for -: 'datetime.time' and 'datetime.timedelta'
```

### 日時の足し算

`date` 型，`time` 型はまず `datetime` 型への変換が必要．変換には，`datetime.combine()` メソッドを用いる．

```python
import datetime as dt


# ベースとなる時間
basetime = dt.time(23, 59, 00)

# 23 時 59 分の 1 分後
dt1 = dt.datetime.combine(dt.date.today(), basetime) + dt.timedelta(minutes=1)
# 23 時 59 分の 2 分後
dt2 = dt.datetime.combine(dt.date.today(), basetime) + dt.timedelta(minutes=2)
# 23 時 59 分の 1 秒前
dt3 = dt.datetime.combine(dt.date.today(), basetime) - dt.timedelta(seconds=1)

# 計算結果を出力
print(dt1.strftime("%H:%M:%S"))
print(dt2.strftime("%H:%M:%S"))
print(dt3.strftime("%H:%M:%S"))
```

- 出力

```txt
00:00:00
00:01:00
23:58:59
```

### 指定間隔の時間を N 分区切りにする

- [【Python】指定間隔を 5 分区切りにする【datetime】(2018/07)](https://qiita.com/5893/items/de710f64a9271013724d)
- [[python] datetime.time 型で時間の足し引き(2018/10)](https://qiita.com/tekitoh/items/00f5afe0faadb27846b0)

datetime モジュールを用いて，特定の時間区切りのリストを作成することができる．電車の時刻表を作る時などに利用できる．

- `time` 型専用

```python
from datetime import date, datetime, time, timedelta
from typing import List
import copy

def split_interval(start_time: time, end_time: time, interval: int = 5) -> List[datetime]:
    """
    * start, end 間を5分毎に区切ったリストにして返す
    * start <= 時間 <= end (start, end を含む)

    param start_time: datetime.time
    param end_time:   datetime.time

    return span_list = [datetime.datetime, ...]
    """

    # cast datetime.time to datetime.datetime
    start: datetime = datetime.combine(date.today(), start_time)
    end: datetime = datetime.combine(date.today(), end_time)

    # prepare
    now_time: datetime = copy.copy(start)
    delta = timedelta(minutes=interval)
    span_list: List[time] = []

    # calculation of  span list
    while start <= now_time <= end:
        span_list.append(now_time)
        now_time += delta

    return span_list


# 始発 6:55，終電 23:47
start, end = time(6, 55, 00), time(23, 47, 00)
span_by_5min = split_interval(start, end, interval=5)
span_by_8min = split_interval(start, end, interval=8)

print(f'----- span_by_5min: {start} ~ {end} -----')
for t in span_by_5min:
    print(t.strftime("%H:%M:%S"))

print(f'----- span_by_8min: {start} ~ {end} -----')
for t in span_by_8min:
    print(t.strftime("%H:%M:%S"))
```

- `datetime` 型専用

`time` 型から `datetime` 型へのキャストがないため大分シンプルになる．

```python
from datetime import date, datetime, time, timedelta
from typing import List
import copy


def split_interval(start_time: datetime, end_time: datetime, interval: int = 5) -> List[datetime]:
    """
    * start_time, end_time 間を5分毎に区切ったリストにして返す
    * start_time <= 時間 <= end_time (start_time, end_time を含む)

    param start_time: datetime.datetime
    param end_time:   datetime.datetime

    return span_list = [datetime.datetime, ...]
    """

    # prepare
    now_time: datetime = copy.copy(start_time)
    delta = timedelta(minutes=interval)
    span_list: List[datetime] = []

    # calculation of  span list
    while start_time <= now_time <= end_time:
        span_list.append(now_time)
        now_time += delta

    return span_list


# 始発 6:55，終電 23:47
basetime = date(2020, 3, 3)
start = datetime.combine(basetime, time(6, 55, 00))
end = datetime.combine(basetime, time(23, 47, 00))

span_by_5min = split_interval(start, end, interval=5)
span_by_8min = split_interval(start, end, interval=8)

print(f'----- span_by_5min: {start} ~ {end} -----')
for t in span_by_5min:
    print(t.strftime("%H:%M:%S"))

print(f'----- span_by_8min: {start} ~ {end} -----')
for t in span_by_8min:
    print(t.strftime("%H:%M:%S"))
```

- 出力：`span_by_5min`

```txt
----- span_by_5min: 2020-03-03 06:55:00 ~ 2020-03-03 23:47:00 -----
06:55:00
07:00:00
07:05:00
07:10:00
07:15:00
07:20:00
07:25:00
...
23:15:00
23:20:00
23:25:00
23:30:00
23:35:00
23:40:00
23:45:00
```
