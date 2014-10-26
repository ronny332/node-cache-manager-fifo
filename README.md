node-cache-manager-fifo
======================

# fifo cache plugin

A cache plugin for [cache-manager](https://github.com/BryanDonovan/node-cache-manager) based on simple and fast fifo (first in first out).

## Features

* the first inserted cache object will be removed as first
* in memory storage
* no complex algorithm to fetch the desired data (direct key to value access)

## why did I wrote this?

[cache-manager](https://github.com/BryanDonovan/node-cache-manager) is my favorite caching module but lru-cache is for some reasons a bit too much.
I was searching for a small and quick fifo cache without loosing the footprints of cache-manager.
The usage is identical to the [i]memory[i] plugin, objects are removed if the value of [i]max[i] items is reached.
