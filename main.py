import pandas as pd
import plotly.graph_objects as go
import ccxt

def fetch_ohlcv_data(symbol='BTC/USDT', timeframe='1d', limit=100):
    exchange = ccxt.binance()
    ohlcv = exchange.fetch_ohlcv(symbol, timeframe, limit=limit)
    df = pd.DataFrame(ohlcv, columns=['timestamp', 'open', 'high', 'low', 'close', 'volume'])
    df['timestamp'] = pd.to_datetime(df['timestamp'], unit='ms')
    return df

def plot_candlestick_chart(df, title='BTC/USDT'):
    fig = go.Figure(data=[go.Candlestick(x=df['timestamp'],
                                         open=df['open'],
                                         high=df['high'],
                                         low=df['low'],
                                         close=df['close'])])
    fig.update_layout(title=title, xaxis_title='Date', yaxis_title='Price (USD)')
    fig.show()

# Fetch daily data
df_daily = fetch_ohlcv_data(timeframe='1d')

# Fetch 4-hour data
df_4h = fetch_ohlcv_data(timeframe='4h')

# Plot the desired time frame chart
plot_candlestick_chart(df_daily, title='BTC/USDT Daily Chart')
plot_candlestick_chart(df_4h, title='BTC/USDT 4-Hour Chart')
