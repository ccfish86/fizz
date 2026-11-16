package markdown

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

// TestTableRaggedRows tests that a table whose rows have more
// cells than its header does not panic, and that the extra cells
// are discarded.
func TestTableRaggedRows(t *testing.T) {
	b := new(Builder)

	var out string
	assert.NotPanics(t, func() {
		out = b.Table([][]string{
			{"A", "B"},
			{"1", "2", "3"},
		}, nil).String()
	})
	assert.Equal(t, "| A   | B   |\n| --- | --- |\n| 1   | 2   |", out)
}

// TestTableAlignment tests the padding of the cells for each
// alignment, including the center alignment.
func TestTableAlignment(t *testing.T) {
	b := new(Builder)

	out := b.Table([][]string{
		{"Left", "Center", "Right"},
		{"a", "b", "c"},
	}, []TableAlignment{AlignLeft, AlignCenter, AlignRight}).String()

	assert.Equal(t, "| Left | Center | Right |\n"+
		"| ---- | :----: | ----: |\n"+
		"| a    |   b    |     c |", out)
}
